'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Card, Form, Input, Button, Table, Tag, Space,
  Typography, Divider, message, Badge, Avatar,
} from 'antd'
import {
  QrcodeOutlined, SyncOutlined, SaveOutlined,
  EnvironmentOutlined, ClockCircleOutlined, CheckCircleOutlined,
  WarningOutlined, LoadingOutlined, WifiOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { createStyles } from 'antd-style'
import { syncDeliveries } from '@/lib/api'
import type { DeliveryQueueItem } from '@/lib/mockData'

const { Title, Text } = Typography

const STORAGE_KEY = 'handlend_queue'

/* ── Mock operator identity (simulates the logged-in field operator) ── */
const OPERATOR = { id: 1, name: 'Carlos Mendez', email: 'carlos@logihumanitas.cl' }

const useStyles = createStyles(({ css }) => ({
  statusBar: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    padding: '12px 16px',
    background: 'rgba(15,23,42,0.5)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginBottom: 16,
  }),
  operatorBadge: css({
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  }),
  statusItem: css({
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    fontSize: 13,
    fontWeight: 600,
  }),
}))

function getSyncTag(status: string) {
  switch (status) {
    case 'pending': return <Tag icon={<ClockCircleOutlined />} color="warning">Pending</Tag>
    case 'sending': return <Tag icon={<LoadingOutlined />} color="processing">Sending...</Tag>
    case 'synced': return <Tag icon={<CheckCircleOutlined />} color="success">Synced</Tag>
    case 'error': return <Tag icon={<WarningOutlined />} color="error">Error</Tag>
    default: return <Tag>{status}</Tag>
  }
}

export default function DeliveryPage() {
  const router = useRouter()
  const { styles } = useStyles()
  const [form] = Form.useForm()
  const [queue, setQueue] = useState<DeliveryQueueItem[]>([])
  const [syncing, setSyncing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try { setQueue(JSON.parse(stored)) } catch { /* ignore */ }
    }
    form.setFieldsValue({ gps_status: 'GPS captured: -33.047, -71.607' })

    // Online/offline listeners
    const goOnline = () => setIsOnline(true)
    const goOffline = () => setIsOnline(false)
    setIsOnline(navigator.onLine)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [form])

  function saveQueue(newQueue: DeliveryQueueItem[]) {
    setQueue(newQueue)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newQueue))
  }

  function handleSimulateQR() {
    const rand = Math.floor(Math.random() * 9000) + 1000
    form.setFieldValue('qr_result', `QR-2026-03-21-${rand}`)
    message.success('QR simulated successfully')
  }

  async function handleSave() {
    try {
      const values = await form.validateFields(['lot_id', 'qr_result'])
      setSaving(true)
      const item: DeliveryQueueItem = {
        client_event_id: crypto.randomUUID(),
        operator_name: OPERATOR.name,
        lot_id: values.lot_id,
        qr_result: values.qr_result,
        gps_status: 'GPS captured: -33.047, -71.607',
        note: values.note || '',
        timestamp: new Date().toISOString(),
        sync_status: 'pending',
      }
      const newQueue = [item, ...queue]
      saveQueue(newQueue)
      form.resetFields(['lot_id', 'qr_result', 'note'])
      form.setFieldsValue({ gps_status: 'GPS captured: -33.047, -71.607' })
      message.success('Delivery saved to queue')
    } catch {
      // validation error — antd handles display
    } finally {
      setSaving(false)
    }
  }

  async function handleSync() {
    const pending = queue.filter(e => e.sync_status === 'pending')
    if (pending.length === 0) {
      message.info('No pending deliveries to sync')
      return
    }

    setSyncing(true)
    const sending = queue.map(e =>
      e.sync_status === 'pending' ? { ...e, sync_status: 'sending' as const } : e
    )
    saveQueue(sending)

    await new Promise(r => setTimeout(r, 2000))
    await syncDeliveries(pending)

    const synced = sending.map(e =>
      e.sync_status === 'sending' ? { ...e, sync_status: 'synced' as const } : e
    )
    saveQueue(synced)
    setSyncing(false)
    message.success(`${pending.length} delivery(s) synced`)
  }

  const pendingCount = queue.filter(e => e.sync_status === 'pending').length

  const columns = [
    {
      title: 'Lot',
      dataIndex: 'lot_id',
      key: 'lot_id',
      render: (v: string) => <Text code>{v}</Text>,
    },
    {
      title: 'QR',
      dataIndex: 'qr_result',
      key: 'qr_result',
      ellipsis: true,
      render: (v: string) => <Text code style={{ fontSize: '12px' }}>{v}</Text>,
    },
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (v: string) => {
        try {
          const d = new Date(v)
          return `${d.getDate().toString().padStart(2,'0')}/${(d.getMonth()+1).toString().padStart(2,'0')} ${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`
        } catch { return v }
      },
    },
    {
      title: 'Status',
      dataIndex: 'sync_status',
      key: 'sync_status',
      render: getSyncTag,
    },
    {
      title: '',
      key: 'actions',
      render: (_: unknown, record: DeliveryQueueItem) => (
        <Button
          size="small"
          onClick={() => router.push('/operator/settlement/1')}
        >
          View status
        </Button>
      ),
    },
  ]

  return (
    <div style={{ padding: '16px', maxWidth: '600px', margin: '0 auto' }}>
      {/* ── O-01-A: Status Indicators ── */}
      <div className={styles.statusBar} data-testid="operator-status-bar">
        <div className={styles.operatorBadge}>
          <Avatar
            size={32}
            style={{ background: '#2dd4bf', color: '#0f172a', fontWeight: 700 }}
            icon={<UserOutlined />}
          >
            {OPERATOR.name[0]}
          </Avatar>
          <div>
            <Text strong style={{ display: 'block', lineHeight: 1.2 }}>{OPERATOR.name}</Text>
            <Text type="secondary" style={{ fontSize: 11 }}>Field Operator</Text>
          </div>
        </div>
        <Space size={16}>
          <div className={styles.statusItem}>
            <Badge status={isOnline ? 'success' : 'error'} />
            <span>{isOnline ? 'Online' : 'Offline'}</span>
          </div>
          {pendingCount > 0 && (
            <div className={styles.statusItem}>
              <Badge count={pendingCount} size="small" />
              <span>pending</span>
            </div>
          )}
        </Space>
      </div>

      <Title level={3} style={{ margin: '0 0 16px' }}>Register Delivery</Title>

      {/* ── O-01-B: Capture Form (single-column, mobile-first) ── */}
      <Card style={{ marginBottom: 16 }}>
        <Form form={form} layout="vertical" data-testid="delivery-form">
          <Form.Item
            name="lot_id"
            label="Lot ID"
            rules={[{ required: true, message: 'Enter the lot ID' }]}
          >
            <Input size="large" placeholder="LOT-001" data-testid="lot-id-input" />
          </Form.Item>

          <Form.Item
            name="qr_result"
            label="QR result"
            rules={[{ required: true, message: 'Scan or simulate the QR' }]}
          >
            <Space.Compact style={{ width: '100%' }}>
              <Input size="large" placeholder="Scan the QR code" data-testid="qr-input" />
              <Button size="large" icon={<QrcodeOutlined />} onClick={handleSimulateQR} data-testid="qr-simulate-btn">
                Simulate QR scan
              </Button>
            </Space.Compact>
          </Form.Item>

          {/* O-01-C: GPS feedback */}
          <Form.Item name="gps_status" label="GPS status">
            <Input
              size="large"
              readOnly
              prefix={<EnvironmentOutlined style={{ color: '#52c41a' }} />}
              style={{ background: 'rgba(82,196,26,0.08)' }}
              data-testid="gps-status"
            />
          </Form.Item>

          <Form.Item name="note" label="Note (optional)">
            <Input.TextArea rows={2} placeholder="Observations about the delivery..." data-testid="note-input" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type="primary"
              size="large"
              block
              icon={<SaveOutlined />}
              onClick={handleSave}
              loading={saving}
              data-testid="save-delivery-btn"
              style={{ height: 48, fontWeight: 700, fontSize: 15 }}
            >
              Save Delivery
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* ── O-01-D: Offline Queue ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <Text strong style={{ fontSize: 15 }}>Delivery Queue ({queue.length})</Text>
        <Button
          type={pendingCount > 0 ? 'primary' : 'default'}
          icon={<SyncOutlined spin={syncing} />}
          onClick={handleSync}
          loading={syncing}
          data-testid="sync-btn"
        >
          {pendingCount > 0 ? `Sync (${pendingCount})` : 'Sync'}
        </Button>
      </div>

      {queue.length === 0 ? (
        <Card>
          <div style={{ textAlign: 'center', padding: '32px', color: '#8c8c8c' }}>
            <ClockCircleOutlined style={{ fontSize: '36px', marginBottom: '12px' }} />
            <div>No deliveries recorded yet</div>
          </div>
        </Card>
      ) : (
        <Table
          dataSource={queue}
          columns={columns}
          rowKey="client_event_id"
          pagination={{ pageSize: 10 }}
          scroll={{ x: 500 }}
          size="small"
        />
      )}
    </div>
  )
}

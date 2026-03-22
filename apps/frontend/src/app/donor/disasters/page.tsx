'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Tag, Button, Spin, Typography, Row, Col, Space, Badge } from 'antd'
import {
  EnvironmentOutlined, ThunderboltOutlined, ArrowRightOutlined,
  ReloadOutlined, HomeOutlined,
} from '@ant-design/icons'
import { createStyles } from 'antd-style'
import { getDisasters } from '@/lib/api'

const { Title, Text, Paragraph } = Typography

function getSeverityColor(severity: string) {
  switch (severity?.toLowerCase()) {
    case 'critical': return '#ef4444'
    case 'high': return '#f97316'
    case 'medium': return '#eab308'
    case 'low': return '#22c55e'
    default: return '#94a3b8'
  }
}

function getSeverityLabel(severity: string) {
  switch (severity?.toLowerCase()) {
    case 'critical': return 'Critical'
    case 'high': return 'High'
    case 'medium': return 'Medium'
    case 'low': return 'Low'
    default: return severity
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Disaster = any

const useStyles = createStyles(({ css }) => ({
  page: css({
    padding: '24px',
    maxWidth: 1100,
    margin: '0 auto',
    '@media (min-width: 768px)': { padding: '32px 40px' },
  }),
  breadcrumb: css({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
    color: 'rgba(255,255,255,0.45)',
    fontSize: 13,
    fontWeight: 600,
    '& a': { color: 'rgba(255,255,255,0.55)', textDecoration: 'none' },
    '& a:hover': { color: '#2dd4bf' },
  }),
  header: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
    flexWrap: 'wrap',
    gap: 12,
  }),
  card: css({
    background: 'rgba(15,23,42,0.55)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
      border: '1px solid rgba(45,212,191,0.25)',
    },
  }),
  cardHeader: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  }),
  cardBody: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  }),
  description: css({
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    lineHeight: 1.6,
    margin: '12px 0',
    flex: 1,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }),
  date: css({
    color: 'rgba(255,255,255,0.35)',
    fontSize: 12,
    fontWeight: 600,
    marginTop: 'auto',
    paddingTop: 12,
  }),
  selectBtn: css({
    marginTop: 16,
    width: '100%',
    height: 44,
    borderRadius: 12,
    fontWeight: 700,
    fontSize: 14,
    background: '#2dd4bf',
    border: 'none',
    color: '#0f172a',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    '&:hover': {
      filter: 'brightness(1.1)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 16px rgba(45,212,191,0.35)',
    },
  }),
  statusDot: css({
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#ef4444',
    display: 'inline-block',
    marginRight: 6,
    boxShadow: '0 0 8px rgba(239,68,68,0.5)',
    animation: 'pulse 2s infinite',
    '@keyframes pulse': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 },
    },
  }),
  fadeIn: css({
    animation: 'fadeInUp 0.4s ease-out',
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(12px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
  }),
}))

export default function DisastersPage() {
  const { styles } = useStyles()
  const router = useRouter()
  const [disasters, setDisasters] = useState<Disaster[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  async function load(isRefresh = false) {
    if (isRefresh) setRefreshing(true)
    else setLoading(true)
    const data = await getDisasters()
    setDisasters(data)
    setLoading(false)
    setRefreshing(false)
  }

  useEffect(() => { load() }, [])

  function handleSelect(disaster: Disaster) {
    localStorage.setItem('selectedDisaster', JSON.stringify(disaster))
    router.push(`/donor/companies?disaster_id=${disaster.id}`)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
        <Spin size="large" tip="Loading disasters..." />
      </div>
    )
  }

  return (
    <div className={`${styles.page} ${styles.fadeIn}`}>
      <div className={styles.breadcrumb}>
        <HomeOutlined />
        <span>/</span>
        <span>Select disaster</span>
      </div>

      <div className={styles.header}>
        <div>
          <Title level={2} style={{ margin: 0 }}>Active Disasters</Title>
          <Text type="secondary">Select an emergency to explore available logistics companies</Text>
        </div>
        <Button
          icon={<ReloadOutlined spin={refreshing} />}
          onClick={() => load(true)}
          loading={refreshing}
        >
          Refresh
        </Button>
      </div>

      <Row gutter={[20, 20]}>
        {disasters.map((disaster: Disaster) => (
          <Col key={disaster.id} xs={24} md={12} xl={8}>
            <div
              className={styles.card}
              onClick={() => handleSelect(disaster)}
              data-testid={`disaster-card-${disaster.id}`}
            >
              <div className={styles.cardHeader}>
                <Title level={4} style={{ margin: 0, flex: 1, paddingRight: 8, color: '#fff' }}>
                  {disaster.name}
                </Title>
                <span style={{ display: 'flex', alignItems: 'center', fontSize: 12, fontWeight: 600, color: '#ef4444', whiteSpace: 'nowrap' }}>
                  <span className={styles.statusDot} />
                  {disaster.status === 'active' ? 'Active' : disaster.status}
                </span>
              </div>

              <div className={styles.cardBody}>
                <Space wrap size={6}>
                  <Tag
                    style={{
                      background: 'rgba(45,212,191,0.12)',
                      border: '1px solid rgba(45,212,191,0.3)',
                      color: '#2dd4bf',
                      borderRadius: 24,
                      fontWeight: 600,
                      fontSize: 11,
                    }}
                    icon={<EnvironmentOutlined />}
                  >
                    {disaster.country}
                  </Tag>
                  <Tag
                    style={{
                      background: 'rgba(139,92,246,0.12)',
                      border: '1px solid rgba(139,92,246,0.3)',
                      color: '#a78bfa',
                      borderRadius: 24,
                      fontWeight: 600,
                      fontSize: 11,
                    }}
                    icon={<ThunderboltOutlined />}
                  >
                    {disaster.event_type}
                  </Tag>
                  <Tag
                    style={{
                      background: `${getSeverityColor(disaster.severity)}18`,
                      border: `1px solid ${getSeverityColor(disaster.severity)}50`,
                      color: getSeverityColor(disaster.severity),
                      borderRadius: 24,
                      fontWeight: 700,
                      fontSize: 11,
                    }}
                  >
                    Urgency: {getSeverityLabel(disaster.severity)}
                  </Tag>
                </Space>

                <p className={styles.description}>{disaster.description}</p>

                <div className={styles.date}>
                  Registered: {new Date(disaster.created_at).toLocaleDateString('en-US')}
                </div>
              </div>

              <button
                className={styles.selectBtn}
                onClick={e => { e.stopPropagation(); handleSelect(disaster) }}
                data-testid={`disaster-select-${disaster.id}`}
              >
                <ArrowRightOutlined />
                Select
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

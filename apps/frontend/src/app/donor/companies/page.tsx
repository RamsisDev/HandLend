'use client'

import { useEffect, useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Tag, Button, Spin, Typography,
  Progress, Space,
} from 'antd'
import {
  CheckCircleOutlined, ArrowRightOutlined,
  ClockCircleOutlined, ArrowLeftOutlined, HomeOutlined,
} from '@ant-design/icons'
import { createStyles } from 'antd-style'
import { getCompaniesByDisaster } from '@/lib/api'

const { Title, Text } = Typography

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Company = any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Disaster = any

function getTrustColor(score: number) {
  if (score >= 85) return '#4ade80'
  if (score >= 70) return '#38bdf8'
  return '#fbbf24'
}

const useStyles = createStyles(({ css }) => ({
  page: css({
    padding: '24px',
    maxWidth: 1000,
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
  backBtn: css({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 10,
    color: 'rgba(255,255,255,0.7)',
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.15s',
    marginBottom: 20,
    '&:hover': {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,0.2)',
    },
  }),
  contextTags: css({
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 10,
    flexWrap: 'wrap',
  }),
  card: css({
    background: 'rgba(15,23,42,0.55)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 20,
    padding: '24px',
    marginBottom: 16,
    transition: 'all 0.25s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-3px)',
      boxShadow: '0 12px 36px rgba(0,0,0,0.35)',
      border: '1px solid rgba(45,212,191,0.2)',
    },
  }),
  cardContent: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 20,
  }),
  cardLeft: css({
    flex: 1,
    minWidth: 260,
  }),
  cardRight: css({
    textAlign: 'center',
    minWidth: 160,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  }),
  viewBtn: css({
    width: '100%',
    height: 40,
    borderRadius: 10,
    fontWeight: 700,
    fontSize: 13,
    background: '#2dd4bf',
    border: 'none',
    color: '#0f172a',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
    '&:hover': {
      filter: 'brightness(1.1)',
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(45,212,191,0.35)',
    },
  }),
  summary: css({
    color: 'rgba(255,255,255,0.5)',
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: 12,
    lineHeight: 1.5,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  }),
  metaRow: css({
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    marginTop: 10,
    flexWrap: 'wrap',
  }),
  metaItem: css({
    color: 'rgba(255,255,255,0.55)',
    fontSize: 13,
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    '& strong': { color: 'rgba(255,255,255,0.8)', fontWeight: 700 },
  }),
  fadeIn: css({
    animation: 'fadeInUp 0.4s ease-out',
    '@keyframes fadeInUp': {
      from: { opacity: 0, transform: 'translateY(12px)' },
      to: { opacity: 1, transform: 'translateY(0)' },
    },
  }),
  emptyState: css({
    textAlign: 'center',
    padding: '60px 24px',
    background: 'rgba(15,23,42,0.35)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.06)',
    borderRadius: 20,
  }),
}))

function CompaniesContent() {
  const { styles } = useStyles()
  const router = useRouter()
  const searchParams = useSearchParams()
  const disasterId = Number(searchParams.get('disaster_id'))

  const [companies, setCompanies] = useState<Company[]>([])
  const [disaster, setDisaster] = useState<Disaster | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('selectedDisaster')
    if (stored) {
      try { setDisaster(JSON.parse(stored)) } catch {}
    }
  }, [])

  useEffect(() => {
    if (!disasterId) {
      router.replace('/donor/disasters')
      return
    }
    async function load() {
      setLoading(true)
      const data = await getCompaniesByDisaster(disasterId)
      setCompanies(data)
      setLoading(false)
    }
    load()
  }, [disasterId, router])

  function handleView(company: Company) {
    router.push(`/donor/company/${company.id}?disaster_id=${disasterId}`)
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
        <Spin size="large" tip="Loading companies..." />
      </div>
    )
  }

  return (
    <div className={`${styles.page} ${styles.fadeIn}`}>
      <div className={styles.breadcrumb}>
        <HomeOutlined />
        <span>/</span>
        <a href="/donor/disasters">Disasters</a>
        <span>/</span>
        <span>{disaster?.name || `Disaster #${disasterId}`}</span>
        <span>/</span>
        <span>Companies</span>
      </div>

      <button className={styles.backBtn} onClick={() => router.push('/donor/disasters')}>
        <ArrowLeftOutlined />
        Back to disasters
      </button>

      <div style={{ marginBottom: 28 }}>
        <Title level={2} style={{ margin: 0 }}>Available Logistics Companies</Title>
        {disaster && (
          <div className={styles.contextTags}>
            <Text type="secondary">For the emergency:</Text>
            <Tag style={{
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.3)',
              color: '#ef4444',
              borderRadius: 24,
              fontWeight: 700,
              fontSize: 12,
            }}>
              {disaster.name}
            </Tag>
            <Tag style={{
              background: 'rgba(45,212,191,0.12)',
              border: '1px solid rgba(45,212,191,0.3)',
              color: '#2dd4bf',
              borderRadius: 24,
              fontWeight: 700,
              fontSize: 12,
            }}>
              {disaster.country}
            </Tag>
          </div>
        )}
      </div>

      {companies.length === 0 ? (
        <div className={styles.emptyState}>
          <Title level={4} style={{ color: 'rgba(255,255,255,0.6)' }}>No companies available</Title>
          <Text type="secondary">No logistics companies have been registered for this disaster yet.</Text>
        </div>
      ) : (
        companies.map((company: Company) => (
          <div
            key={company.id}
            className={styles.card}
            onClick={() => handleView(company)}
            data-testid={`company-card-${company.id}`}
          >
            <div className={styles.cardContent}>
              <div className={styles.cardLeft}>
                <Space align="center" style={{ marginBottom: 8 }}>
                  <Title level={4} style={{ margin: 0, color: '#fff' }}>{company.name}</Title>
                  {company.verification_status === 'active' && (
                    <Tag
                      icon={<CheckCircleOutlined />}
                      style={{
                        background: 'rgba(74,222,128,0.12)',
                        border: '1px solid rgba(74,222,128,0.3)',
                        color: '#4ade80',
                        borderRadius: 24,
                        fontWeight: 700,
                        fontSize: 11,
                      }}
                    >
                      Verified
                    </Tag>
                  )}
                </Space>

                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <strong>Capacity:</strong> {company.capacity}
                  </span>
                  <span className={styles.metaItem}>
                    <strong>Coverage:</strong> {company.coverage}
                  </span>
                  <span className={styles.metaItem}>
                    <ClockCircleOutlined style={{ color: 'rgba(255,255,255,0.4)' }} />
                    {company.response_time}
                  </span>
                </div>

                <p className={styles.summary}>
                  {company.genlayer_summary}
                </p>
              </div>

              <div className={styles.cardRight}>
                <Text style={{ color: 'rgba(255,255,255,0.45)', fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' as const }}>
                  Trust Score
                </Text>
                <Text strong style={{ fontSize: 32, color: getTrustColor(company.trust_score), lineHeight: 1 }}>
                  {company.trust_score}
                </Text>
                <Progress
                  percent={company.trust_score}
                  showInfo={false}
                  strokeColor={getTrustColor(company.trust_score)}
                  trailColor="rgba(255,255,255,0.08)"
                  style={{ width: 160 }}
                />
                <button
                  className={styles.viewBtn}
                  onClick={e => { e.stopPropagation(); handleView(company) }}
                >
                  <ArrowRightOutlined />
                  View details
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default function CompaniesPage() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}><Spin size="large" /></div>}>
      <CompaniesContent />
    </Suspense>
  )
}

'use client'

import { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Spin } from 'antd'
import { useAuth } from '@/lib/authContext'

export default function CoordinatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const isLoginPage = pathname === '/coordinator/login'

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.replace('/coordinator/login')
    }
  }, [isAuthenticated, isLoginPage, router])

  // On the login page, always render children (login form)
  if (isLoginPage) return <>{children}</>

  // While waiting for redirect
  if (!isAuthenticated) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: 80 }}>
        <Spin size="large" tip="Redirecting to login..." />
      </div>
    )
  }

  return <>{children}</>
}

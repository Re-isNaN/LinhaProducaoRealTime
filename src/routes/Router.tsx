import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { Loading } from '@/components/Loading'
import { NotFound } from '@/pages/NotFound404'
import { LinhaProducao } from '@/pages/LinhaProducao'
import { DadosLinhaProducaoProvider } from '@/pages/LinhaProducao/contexts/dadosContext'

export function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/"
          element={
            <DadosLinhaProducaoProvider>
              <LinhaProducao />
            </DadosLinhaProducaoProvider>
          }
        />

        <Route path="*" Component={NotFound} />
      </Routes>
    </Suspense>
  )
}

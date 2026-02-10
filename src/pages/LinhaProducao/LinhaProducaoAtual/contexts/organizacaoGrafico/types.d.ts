import { Dispatch, ReactNode, SetStateAction } from 'react'
import { IEdgeWorkflow, INodeWorkflow } from '../../types'
import { OnEdgesChange, OnNodesChange } from '@xyflow/react'
import { IPropsChildrenComponent } from '@/@types/PropsChildrenComponent'
import { TypeStatus } from '@/@types/TiposStatus'

export interface IPropsGraficoLinhaProducaoProvider extends IPropsChildrenComponent { }

export interface IContextGraficoLinhaProducao {
    nodes: INodeWorkflow[]

    edges: IEdgeWorkflow[]
}

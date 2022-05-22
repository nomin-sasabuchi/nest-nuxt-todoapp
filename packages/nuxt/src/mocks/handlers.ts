import { rest } from 'msw'
import mockUser from './api/mockUser'

export const handlers = [rest.get('/v1/users/:userId', mockUser)]

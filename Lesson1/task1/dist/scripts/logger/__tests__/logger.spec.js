import { createLogger } from '../logger';

it('shold return stored logs', () => {
  const logger = createLogger('user-login');
  expect(logger.getLogs()).toEqual([]);
});

it('shold save log message', () => {
  const logger = createLogger('user-login');
  logger.log('login success');
  expect(logger.getLogs()).toEqual(['log - user-login - login success']);
});

it('shold save errors', () => {
  const logger = createLogger('user-login');
  logger.error('login failed');
  expect(logger.getLogs()).toEqual(['error - user-login - login failed']);
});

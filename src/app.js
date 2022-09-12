/* istanbul ignore file */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import { logger as appLogger } from '@/utils';
import { attachRouters } from '@/routes';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

attachRouters(app);

/**
 * GERENCIAMENTO DE ERROS CENTRALIZADO
 * Não remova os 4 parâmetros da função de callback abaixo
 * pois é a presença dos 4 que informa ao Express que este
 * é um local centralizado para o gerenciamento de erros.
 */
app.use((error, req, res, next) => {
  appLogger.error(error.stack);
  res.status(error.status).json({ message: error.message });
});

export default app;

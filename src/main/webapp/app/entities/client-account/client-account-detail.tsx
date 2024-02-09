import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './client-account.reducer';

export const ClientAccountDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const clientAccountEntity = useAppSelector(state => state.clientAccount.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="clientAccountDetailsHeading">
          <Translate contentKey="blockchainApp.clientAccount.detail.title">ClientAccount</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{clientAccountEntity.id}</dd>
          <dt>
            <span id="accountNumber">
              <Translate contentKey="blockchainApp.clientAccount.accountNumber">Account Number</Translate>
            </span>
          </dt>
          <dd>{clientAccountEntity.accountNumber}</dd>
          <dt>
            <span id="owner">
              <Translate contentKey="blockchainApp.clientAccount.owner">Owner</Translate>
            </span>
          </dt>
          <dd>{clientAccountEntity.owner}</dd>
          <dt>
            <span id="balance">
              <Translate contentKey="blockchainApp.clientAccount.balance">Balance</Translate>
            </span>
          </dt>
          <dd>{clientAccountEntity.balance}</dd>
          <dt>
            <span id="creationDate">
              <Translate contentKey="blockchainApp.clientAccount.creationDate">Creation Date</Translate>
            </span>
          </dt>
          <dd>
            {clientAccountEntity.creationDate ? (
              <TextFormat value={clientAccountEntity.creationDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
        </dl>
        <Button tag={Link} to="/client-account" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/client-account/${clientAccountEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ClientAccountDetail;
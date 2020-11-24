import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaMedal } from 'react-icons/fa';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import {
  Container,
  TableContainer,
  PoleContainer,
  Position,
  MetaCampain,
  HeaderContainer,
} from './styles';

function Campain() {
  const [realtors, setRealtors] = useState([]);
  const [vgvAcumulado, setVgvAcumulado] = useState(0);
  const [metaGeral] = useState(10000000);
  const [city] = useState('São Luís');

  const getDayFinal = () => {
    const data = '2020-12-22';
    const falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
    const day = Math.round(falta / 60 / 60 / 24);
    return day;
  };
  useEffect(() => {
    const loadRanking = async () => {
      const response = await api.get(`/ranking/camapain?city=${city}`);
      setRealtors(response.data.ranking);
      setVgvAcumulado(response.data.vgvTotal);
    };
    loadRanking();
  }, [city]);
  return (
    <>
      <HeaderContainer>
        <header>
          <Link to="/">
            <span>CAMPANHA DE DEZEMBRO</span>
          </Link>
        </header>
      </HeaderContainer>
      <Container>
        <MetaCampain>
          <table>
            <thead>
              <tr>
                <th>VGV ATUAL</th>
                <th>META GERAL</th>
                <th>Falta </th>
                <th>Campanha Termina em </th>
              </tr>
            </thead>
            <tbody>
              {vgvAcumulado >= metaGeral ? (
                <td className="goal">{formatPrice(vgvAcumulado)}</td>
              ) : (
                <td className="notgoal">{formatPrice(vgvAcumulado)}</td>
              )}

              <td className="goal">{formatPrice(metaGeral)}</td>
              <td className="less">
                {metaGeral - vgvAcumulado <= 0
                  ? formatPrice(0)
                  : formatPrice(metaGeral - vgvAcumulado)}
              </td>
              {getDayFinal() <= 0 ? (
                <td className="notgoal">Campanha Finalizada</td>
              ) : (
                <td className="goal">{`${getDayFinal()} dias`}</td>
              )}
            </tbody>
          </table>
        </MetaCampain>
        <PoleContainer>
          <table>
            <tbody>
              {realtors.map((realtor, i) => {
                return i <= 4 ? (
                  <Position key={realtor.id} position={i + 1}>
                    <td className="position">{`${i + 1}°`}</td>
                    <td className="gold">
                      <img
                        className="picture-realtor"
                        src={realtor.avatar}
                        alt={realtor.name}
                      />
                    </td>
                    <td className="title">{realtor.name}</td>
                    <td className="gold vgv">{formatPrice(realtor.vgv)}</td>
                    <td className="gold">
                      <FaMedal size={80} />
                    </td>
                  </Position>
                ) : null;
              })}
            </tbody>
          </table>
        </PoleContainer>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Posição</th>
                <th />
                <th>Corretor</th>
                <th>VGV</th>
                <th>Quantidade de Imóveis</th>
              </tr>
            </thead>

            <tbody>
              {realtors.map((realtor, i) => {
                return i >= 5 ? (
                  <tr key={realtor.id}>
                    <td className="title">{`${i + 1}°`}</td>
                    <td>
                      <img
                        className="picture-realtor"
                        src={realtor.avatar}
                        alt={realtor.name}
                      />
                    </td>
                    <td>{realtor.name}</td>
                    <td className="vgv">{formatPrice(realtor.vgv)}</td>
                    <td>{realtor.quantSale}</td>
                  </tr>
                ) : null;
              })}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
}

export default Campain;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const HeaderContainer = styled.div`
  background: #ed1236;
  padding: 30px 0;
  header {
    max-width: 1120px;
    margin: 0 auto;
    padding: '0 20px';
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      transition: opacity 0.2s;

      & + a {
        margin-left: 20px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      &.title {
        color: #363f5f;
      }
      &.gold {
        color: #ffd700;
      }
      &.vgv {
        color: #f00;
      }

      img.picture-realtor {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const PoleContainer = styled.section`
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const Position = styled.tr`
  td {
    padding: 20px 32px;
    border: 0;
    background: #fff;
    font-size: 16px;
    font-weight: normal;
    color: #969cb3;
    svg {
      fill: ${({ position }) => {
        if (position === 1) {
          return '#ffd700';
        }
        if (position === 2) {
          return '#BEC2CB';
        }
        if (position === 3) {
          return '#CD7F32';
        }
        if (position === 4) {
          return '#120A8F';
        }
        if (position === 5) {
          return '#ff0000';
        }
        return '#fff';
      }};
    }
    &.title {
      color: #969cb3;
      font-size: 38px;
    }
    &.position {
      padding: 40px 32px;
      font-size: 38px;
    }
    &.vgv {
      font-weight: bold;
      color: ${({ position }) => {
        if (position === 1) {
          return '#ffd700';
        }
        if (position === 2) {
          return '#BEC2CB';
        }
        if (position === 3) {
          return '#CD7F32';
        }
        if (position === 4) {
          return '#120A8F';
        }
        if (position === 5) {
          return '#ff0000';
        }
        return '#fff';
      }};
      font-size: 38px;
    }
    img.picture-realtor {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

export const MetaCampain = styled.div`
  table {
    width: 100%;
    border-spacing: 0 8px;
    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }
    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
      &.goal {
        color: green;
      }
      &.notgoal {
        color: red;
      }
      &.less {
        color: #ffd700;
      }
    }
    td:first-child {
      border-radius: 8px 0 0 8px;
    }
    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 24px;
  background: #f4ecd8;
  border-radius: 8px;
  border: 1px solid #bfa77a;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fffbe6;
  margin-top: 12px;

  th,
  td {
    padding: 8px 12px;
    border: 1px solid #bfa77a;
    text-align: left;
    font-family: ${(p) => p.theme.fonts.body};
    font-size: ${(p) => p.theme.fontSizes.body};
  }

  th {
    background-color: #e4d8ac;
  }
`;

const StyledButton = styled.button`
  padding: 13px 32px;
  background: ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 7px;
  font-family: ${(p) => p.theme.fonts.header};
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 24px;
  box-shadow: 0 2px 12px ${(p) => p.theme.colors.shadow};
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.accent};
    color: #fffdf6;
  }
`;

function Summary({ data, onRestart }) {
  if (!data.level1 || !data.level2) return null;

  return (
    <Box>
      <h2>QC Summary</h2>
      <h3>Shipment Details</h3>
      <ul>
        <li>
          <b>Supplier:</b> {data.level1.supplier}
        </li>
        <li>
          <b>Packing:</b> {data.level1.packing}
        </li>
        <li>
          <b>Boxes:</b> {data.level1.boxes}
        </li>
        <li>
          <b>GRN/ASN:</b> {data.level1.grn}
        </li>
      </ul>
      <h3>Unit-Level Results</h3>
      <Table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Condition</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {data.level2.units.map((u, i) => (
            <tr key={i}>
              <td>{u.sn}</td>
              <td>{u.condition}</td>
              <td>{u.remarks}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StyledButton onClick={onRestart}>Start New QC</StyledButton>
    </Box>
  );
}

export default Summary;

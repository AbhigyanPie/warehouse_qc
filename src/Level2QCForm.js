import React, { useState } from 'react';
import styled from 'styled-components';

const Field = styled.div`
  margin-bottom: 24px;

  label {
    font-size: ${(p) => p.theme.fontSizes.label};
    font-family: ${(p) => p.theme.fonts.header};
    display: block;
    margin-bottom: 6px;
  }

  input,
  select,
  textarea {
    font-size: ${(p) => p.theme.fontSizes.input};
    border-radius: 6px;
    border: 1.4px solid ${(p) => p.theme.colors.accent};
    padding: 8px 14px;
    background: #fbf8f3;
    width: 100%;
    box-sizing: border-box;
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 12px;
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
  margin-right: 10px;
  box-shadow: 0 2px 12px ${(p) => p.theme.colors.shadow};
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.accent};
    color: #fffdf6;
  }
`;

function Level2QCForm({ onComplete, defaultData = {} }) {
  const [units, setUnits] = useState(defaultData.units || [{ sn: '', condition: '', remarks: '' }]);

  const handleChange = (idx, name, value) => {
    const updated = [...units];
    updated[idx][name] = value;
    setUnits(updated);
  };

  const addUnits = () => setUnits([...units, { sn: '', condition: '', remarks: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete({ units });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Level 2: Unit Level QC</h2>
      {units.map((unit, idx) => (
        <div
          key={idx}
          style={{ borderBottom: '1px solid #bfa77a', marginBottom: 12, paddingBottom: 12 }}
        >
          <Field>
            <label>Unit Serial Number:</label>
            <input
              value={unit.sn}
              onChange={(e) => handleChange(idx, 'sn', e.target.value)}
              required
            />
          </Field>
          <Field>
            <label>Condition:</label>
            <select
              value={unit.condition}
              onChange={(e) => handleChange(idx, 'condition', e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Good">Good</option>
              <option value="Defective">Defective</option>
            </select>
          </Field>
          <Field>
            <label>Remarks:</label>
            <input value={unit.remarks} onChange={(e) => handleChange(idx, 'remarks', e.target.value)} />
          </Field>
        </div>
      ))}
      <ButtonsWrapper>
        <StyledButton type="button" onClick={addUnits}>
          Add Another Unit
        </StyledButton>
        <StyledButton type="submit">Finish & View Summary</StyledButton>
      </ButtonsWrapper>
    </form>
  );
}

export default Level2QCForm;

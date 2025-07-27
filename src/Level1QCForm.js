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

const StyledButton = styled.button`
  padding: 13px 32px;
  background: ${(p) => p.theme.colors.secondary};
  color: ${(p) => p.theme.colors.text};
  border: none;
  border-radius: 7px;
  font-family: ${(p) => p.theme.fonts.header};
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 12px;
  box-shadow: 0 2px 12px ${(p) => p.theme.colors.shadow};
  transition: background 0.2s;
  cursor: pointer;

  &:hover {
    background: ${(p) => p.theme.colors.accent};
    color: #fffdf6;
  }
`;

function Level1QCForm({ onComplete, defaultData = {} }) {
  const [form, setForm] = useState(defaultData);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onComplete(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Level 1: Shipment Check</h2>
      <Field>
        <label>Supplier Name:</label>
        <input name="supplier" value={form.supplier || ''} onChange={handleChange} required />
      </Field>
      <Field>
        <label>Packing Integrity:</label>
        <select name="packing" value={form.packing || ''} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="ok">Ok</option>
          <option value="damaged">Damaged</option>
        </select>
      </Field>
      <Field>
        <label>Number of Boxes:</label>
        <input
          name="boxes"
          type="number"
          min="0"
          value={form.boxes || ''}
          onChange={handleChange}
          required
        />
      </Field>
      <Field>
        <label>GRN/ASN Number:</label>
        <input name="grn" value={form.grn || ''} onChange={handleChange} required />
      </Field>
      <StyledButton type="submit">Proceed to Level 2</StyledButton>
    </form>
  );
}

export default Level1QCForm;

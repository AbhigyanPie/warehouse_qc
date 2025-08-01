# Warehouse QC App — Old Money Edition

A simple, elegant React app designed for warehouse operations teams to conduct multi-level Quality Checks (QC) on incoming shipments from suppliers.  
Built with an "old money" aesthetic featuring classic fonts, muted earthy tones, and a user-friendly, stylish interface.

---

## Features

- **Two-Level QC Workflow**:  
  - Level 1 — Initial shipment checks (Supplier name, packing integrity, boxes count, GRN/ASN number).  
  - Level 2 — Detailed QC on individual units (Serial number, condition, remarks).  
- **Old Money Aesthetic**: Classic serif fonts (Garamond, Times New Roman, Playfair Display), muted greens, creams, and gold highlights.  
- **Responsive & Accessible**: Clean layout with large fonts and clear form fields to ensure ease of use and reduce errors.  
- **State Management**: React Hooks for form state and step control.
- **Summary View**: Concise summary of QC results with edit and restart flows.

---

## Demo

https://drive.google.com/drive/folders/18qluXHQhyT2A2pVTXAGUKYqPN7axzE8w?usp=sharing

---

## Tech Stack

- React (Functional components, Hooks)  
- Styled-Components for CSS-in-JS styling and theming  
- Create React App for bootstrapping  

---

## Installation

1. **Clone the repository**

git clone https://github.com/your-username/warehouse-qc-oldmoney.git
cd warehouse-qc-oldmoney

2. **Install dependencies**

npm install

3. **Run the app**

npm start

Your app will be available at `http://localhost:3000`

---

## Usage

- Start by filling in Level 1 shipment details and submit.  
- Proceed to Level 2 to enter details for each unit in the shipment, with the ability to add multiple units.  
- Upon completion, review the summary and restart for a new QC process.

---

## Folder Structure

src/
┣ App.js # Main app entry point with theming and stage management
┣ theme.js # Theme definition (optional separate file)
┣ Level1QCForm.js # First level QC form component
┣ Level2QCForm.js # Second level QC form component
┣ Summary.js # QC summary component
┣ index.js # React app bootstrap
┣ index.css # Global CSS (if any)
┗ ...


*Thank you for using the Warehouse QC App!*

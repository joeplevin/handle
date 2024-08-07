import React, {createContext, useState, useContext} from 'react';
import {set} from 'react-hook-form';

const InvoiceContext = createContext({
  userPoolId: null,
  setUserPoolId: () => {},
  extractedData: null,
  setExtractedData: () => {},
  invoiceUrl: null,
  setInvoiceUrl: () => {},
  invoiceName: null,
  setInvoiceName: () => {},
  parseInvoiceData: null,
  setParseInvoiceData: () => {},
  parseInvoiceItemData: null,
  setParseInvoiceItemData: () => {},
  invoiceItemReviewData: [],
  setInvoiceItemReviewData: () => {},
  parseInvoiceSupplierData: null,
  setParseInvoiceSupplierData: () => {},
  inventoryItemData: [],
  setInventoryItemData: () => {},
  inventoryItemsBeforeUpdate: [],
  setInventoryItemsBeforeUpdate: () => {},
  inventoryItemsAfterUpdate: [],
  setInventoryItemsAfterUpdate: () => {},
  savedInvoiceItems: [],
  setSavedInvoiceItems: () => {},
});

export const useInvoice = () => useContext(InvoiceContext);

export const InvoiceProvider = ({children}) => {
  const [scannedImage, setScannedImage] = useState(
    'file:///data/user/0/com.handle/cache/mlkit_docscan_ui_client/9334225746600.jpg',
  );
  const [userPoolId, setUserPoolId] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  const [invoiceUrl, setInvoiceUrl] = useState(null);
  const [invoiceName, setInvoiceName] = useState(null);
  const [parseInvoiceItemData, setParseInvoiceItemData] = useState([]);
  const [parseInvoiceData, setParseInvoiceData] = useState({});
  const [parseInvoiceSupplierData, setParseInvoiceSupplierData] = useState({});
  const [invoiceItemReviewData, setInvoiceItemReviewData] = useState([]);
  const [inventoryItemData, setInventoryItemData] = useState([]);
  const [inventoryItemsBeforeUpdate, setInventoryItemsBeforeUpdate] = useState(
    [],
  );
  const [inventoryItemsAfterUpdate, setInventoryItemsAfterUpdate] = useState(
    [],
  );
  const [savedInvoiceItems, setSavedInvoiceItems] = useState([]);

  const value = {
    userPoolId,
    setUserPoolId,
    extractedData,
    setExtractedData,
    invoiceUrl,
    setInvoiceUrl,
    invoiceName,
    setInvoiceName,
    parseInvoiceItemData,
    setParseInvoiceItemData,
    invoiceItemReviewData,
    setInvoiceItemReviewData,
    parseInvoiceData,
    setParseInvoiceData,
    parseInvoiceSupplierData,
    setParseInvoiceSupplierData,
    inventoryItemData,
    setInventoryItemData,
    inventoryItemsBeforeUpdate,
    setInventoryItemsBeforeUpdate,
    inventoryItemsAfterUpdate,
    setInventoryItemsAfterUpdate,
    savedInvoiceItems,
    setSavedInvoiceItems,
  };

  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  );
};

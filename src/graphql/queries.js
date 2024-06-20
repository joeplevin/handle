/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSupplier = /* GraphQL */ `
  query GetSupplier($id: ID!) {
    getSupplier(id: $id) {
      id
      name
      email
      phone
      address
      catalogItems {
        nextToken
        __typename
      }
      invoices {
        nextToken
        __typename
      }
      supplierInventoryLinks {
        nextToken
        __typename
      }
      groups
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listSuppliers = /* GraphQL */ `
  query ListSuppliers(
    $filter: ModelSupplierFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuppliers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        address
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCatalogItem = /* GraphQL */ `
  query GetCatalogItem($id: ID!) {
    getCatalogItem(id: $id) {
      id
      supplier {
        id
        name
        email
        phone
        address
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      supplierId
      name
      pricePerUnit
      availableQuantity
      inventoryItems {
        nextToken
        __typename
      }
      groups
      createdAt
      updatedAt
      supplierCatalogItemsId
      owner
      __typename
    }
  }
`;
export const listCatalogItems = /* GraphQL */ `
  query ListCatalogItems(
    $filter: ModelCatalogItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatalogItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        supplierId
        name
        pricePerUnit
        availableQuantity
        groups
        createdAt
        updatedAt
        supplierCatalogItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInventoryItem = /* GraphQL */ `
  query GetInventoryItem($id: ID!) {
    getInventoryItem(id: $id) {
      id
      name
      weight
      units
      averagePrice
      catalogItem {
        id
        supplierId
        name
        pricePerUnit
        availableQuantity
        groups
        createdAt
        updatedAt
        supplierCatalogItemsId
        owner
        __typename
      }
      catalogItemId
      invoiceItems {
        nextToken
        __typename
      }
      supplierInventoryLinks {
        nextToken
        __typename
      }
      usedInRecipes {
        nextToken
        __typename
      }
      waste {
        nextToken
        __typename
      }
      groups
      minQuantity
      createdAt
      updatedAt
      catalogItemInventoryItemsId
      owner
      __typename
    }
  }
`;
export const listInventoryItems = /* GraphQL */ `
  query ListInventoryItems(
    $filter: ModelInventoryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        weight
        units
        averagePrice
        catalogItemId
        groups
        minQuantity
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSupplierInventoryLink = /* GraphQL */ `
  query GetSupplierInventoryLink($id: ID!) {
    getSupplierInventoryLink(id: $id) {
      id
      supplier {
        id
        name
        email
        phone
        address
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      supplierId
      inventoryItem {
        id
        name
        weight
        units
        averagePrice
        catalogItemId
        groups
        minQuantity
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        owner
        __typename
      }
      inventoryItemId
      pricePerUnit
      lastDeliveryDate
      deliveryWeight
      groups
      createdAt
      updatedAt
      supplierSupplierInventoryLinksId
      inventoryItemSupplierInventoryLinksId
      owner
      __typename
    }
  }
`;
export const listSupplierInventoryLinks = /* GraphQL */ `
  query ListSupplierInventoryLinks(
    $filter: ModelSupplierInventoryLinkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupplierInventoryLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        supplierId
        inventoryItemId
        pricePerUnit
        lastDeliveryDate
        deliveryWeight
        groups
        createdAt
        updatedAt
        supplierSupplierInventoryLinksId
        inventoryItemSupplierInventoryLinksId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      supplier {
        id
        name
        email
        phone
        address
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      supplierId
      invoiceNumber
      date
      totalAmount
      imageUrl
      items {
        nextToken
        __typename
      }
      groups
      createdAt
      updatedAt
      supplierInvoicesId
      owner
      __typename
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        supplierId
        invoiceNumber
        date
        totalAmount
        imageUrl
        groups
        createdAt
        updatedAt
        supplierInvoicesId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInvoiceItem = /* GraphQL */ `
  query GetInvoiceItem($id: ID!) {
    getInvoiceItem(id: $id) {
      id
      invoice {
        id
        supplierId
        invoiceNumber
        date
        totalAmount
        imageUrl
        groups
        createdAt
        updatedAt
        supplierInvoicesId
        owner
        __typename
      }
      invoiceId
      inventoryItem {
        id
        name
        weight
        units
        averagePrice
        catalogItemId
        groups
        minQuantity
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        owner
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      weight
      units
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons {
        nextToken
        __typename
      }
      groups
      createdAt
      updatedAt
      inventoryItemInvoiceItemsId
      invoiceItemsId
      owner
      __typename
    }
  }
`;
export const listInvoiceItems = /* GraphQL */ `
  query ListInvoiceItems(
    $filter: ModelInvoiceItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoiceItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        invoiceId
        inventoryItemId
        name
        totalQuantity
        acceptedQuantity
        weight
        units
        pricePerUnit
        expiryDate
        accepted
        groups
        createdAt
        updatedAt
        inventoryItemInvoiceItemsId
        invoiceItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRejectionReason = /* GraphQL */ `
  query GetRejectionReason($id: ID!) {
    getRejectionReason(id: $id) {
      id
      invoiceItem {
        id
        invoiceId
        inventoryItemId
        name
        totalQuantity
        acceptedQuantity
        weight
        units
        pricePerUnit
        expiryDate
        accepted
        groups
        createdAt
        updatedAt
        inventoryItemInvoiceItemsId
        invoiceItemsId
        owner
        __typename
      }
      invoiceItemId
      reason
      groups
      createdAt
      updatedAt
      invoiceItemRejectionReasonsId
      owner
      __typename
    }
  }
`;
export const listRejectionReasons = /* GraphQL */ `
  query ListRejectionReasons(
    $filter: ModelRejectionReasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRejectionReasons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        invoiceItemId
        reason
        groups
        createdAt
        updatedAt
        invoiceItemRejectionReasonsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      description
      preparationTime
      cookingTime
      recipeItems {
        nextToken
        __typename
      }
      groups
      minQuantity
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        preparationTime
        cookingTime
        groups
        minQuantity
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecipeItem = /* GraphQL */ `
  query GetRecipeItem($id: ID!) {
    getRecipeItem(id: $id) {
      id
      recipe {
        id
        name
        description
        preparationTime
        cookingTime
        groups
        minQuantity
        createdAt
        updatedAt
        owner
        __typename
      }
      recipeId
      inventoryItem {
        id
        name
        weight
        units
        averagePrice
        catalogItemId
        groups
        minQuantity
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        owner
        __typename
      }
      inventoryItemId
      quantityUsed
      wasteGenerated
      groups
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
      recipeRecipeItemsId
      owner
      __typename
    }
  }
`;
export const listRecipeItems = /* GraphQL */ `
  query ListRecipeItems(
    $filter: ModelRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        recipeId
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        recipeRecipeItemsId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWasteItem = /* GraphQL */ `
  query GetWasteItem($id: ID!) {
    getWasteItem(id: $id) {
      id
      inventoryItem {
        id
        name
        weight
        units
        averagePrice
        catalogItemId
        groups
        minQuantity
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        owner
        __typename
      }
      inventoryItemId
      quantity
      date
      reason
      groups
      createdAt
      updatedAt
      inventoryItemWasteId
      owner
      __typename
    }
  }
`;
export const listWasteItems = /* GraphQL */ `
  query ListWasteItems(
    $filter: ModelWasteItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWasteItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        inventoryItemId
        quantity
        date
        reason
        groups
        createdAt
        updatedAt
        inventoryItemWasteId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;

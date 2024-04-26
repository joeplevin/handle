/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSupplier = /* GraphQL */ `
  mutation CreateSupplier(
    $input: CreateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    createSupplier(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSupplier = /* GraphQL */ `
  mutation UpdateSupplier(
    $input: UpdateSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    updateSupplier(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSupplier = /* GraphQL */ `
  mutation DeleteSupplier(
    $input: DeleteSupplierInput!
    $condition: ModelSupplierConditionInput
  ) {
    deleteSupplier(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCatalogItem = /* GraphQL */ `
  mutation CreateCatalogItem(
    $input: CreateCatalogItemInput!
    $condition: ModelCatalogItemConditionInput
  ) {
    createCatalogItem(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierCatalogItemsId
      __typename
    }
  }
`;
export const updateCatalogItem = /* GraphQL */ `
  mutation UpdateCatalogItem(
    $input: UpdateCatalogItemInput!
    $condition: ModelCatalogItemConditionInput
  ) {
    updateCatalogItem(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierCatalogItemsId
      __typename
    }
  }
`;
export const deleteCatalogItem = /* GraphQL */ `
  mutation DeleteCatalogItem(
    $input: DeleteCatalogItemInput!
    $condition: ModelCatalogItemConditionInput
  ) {
    deleteCatalogItem(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierCatalogItemsId
      __typename
    }
  }
`;
export const createInventoryItem = /* GraphQL */ `
  mutation CreateInventoryItem(
    $input: CreateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    createInventoryItem(input: $input, condition: $condition) {
      id
      name
      weight
      averagePrice
      catalogItem {
        id
        supplierId
        name
        pricePerUnit
        availableQuantity
        createdAt
        updatedAt
        supplierCatalogItemsId
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
      createdAt
      updatedAt
      catalogItemInventoryItemsId
      __typename
    }
  }
`;
export const updateInventoryItem = /* GraphQL */ `
  mutation UpdateInventoryItem(
    $input: UpdateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    updateInventoryItem(input: $input, condition: $condition) {
      id
      name
      weight
      averagePrice
      catalogItem {
        id
        supplierId
        name
        pricePerUnit
        availableQuantity
        createdAt
        updatedAt
        supplierCatalogItemsId
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
      createdAt
      updatedAt
      catalogItemInventoryItemsId
      __typename
    }
  }
`;
export const deleteInventoryItem = /* GraphQL */ `
  mutation DeleteInventoryItem(
    $input: DeleteInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    deleteInventoryItem(input: $input, condition: $condition) {
      id
      name
      weight
      averagePrice
      catalogItem {
        id
        supplierId
        name
        pricePerUnit
        availableQuantity
        createdAt
        updatedAt
        supplierCatalogItemsId
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
      createdAt
      updatedAt
      catalogItemInventoryItemsId
      __typename
    }
  }
`;
export const createSupplierInventoryLink = /* GraphQL */ `
  mutation CreateSupplierInventoryLink(
    $input: CreateSupplierInventoryLinkInput!
    $condition: ModelSupplierInventoryLinkConditionInput
  ) {
    createSupplierInventoryLink(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
        __typename
      }
      supplierId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      pricePerUnit
      lastDeliveryDate
      deliveryWeight
      createdAt
      updatedAt
      supplierSupplierInventoryLinksId
      inventoryItemSupplierInventoryLinksId
      __typename
    }
  }
`;
export const updateSupplierInventoryLink = /* GraphQL */ `
  mutation UpdateSupplierInventoryLink(
    $input: UpdateSupplierInventoryLinkInput!
    $condition: ModelSupplierInventoryLinkConditionInput
  ) {
    updateSupplierInventoryLink(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
        __typename
      }
      supplierId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      pricePerUnit
      lastDeliveryDate
      deliveryWeight
      createdAt
      updatedAt
      supplierSupplierInventoryLinksId
      inventoryItemSupplierInventoryLinksId
      __typename
    }
  }
`;
export const deleteSupplierInventoryLink = /* GraphQL */ `
  mutation DeleteSupplierInventoryLink(
    $input: DeleteSupplierInventoryLinkInput!
    $condition: ModelSupplierInventoryLinkConditionInput
  ) {
    deleteSupplierInventoryLink(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
        __typename
      }
      supplierId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      pricePerUnit
      lastDeliveryDate
      deliveryWeight
      createdAt
      updatedAt
      supplierSupplierInventoryLinksId
      inventoryItemSupplierInventoryLinksId
      __typename
    }
  }
`;
export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierInvoicesId
      __typename
    }
  }
`;
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierInvoicesId
      __typename
    }
  }
`;
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
      id
      supplier {
        id
        name
        email
        phone
        address
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      supplierInvoicesId
      __typename
    }
  }
`;
export const createInvoiceItem = /* GraphQL */ `
  mutation CreateInvoiceItem(
    $input: CreateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    createInvoiceItem(input: $input, condition: $condition) {
      id
      invoice {
        id
        supplierId
        invoiceNumber
        date
        totalAmount
        imageUrl
        createdAt
        updatedAt
        supplierInvoicesId
        __typename
      }
      invoiceId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      weight
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      inventoryItemInvoiceItemsId
      invoiceItemsId
      __typename
    }
  }
`;
export const updateInvoiceItem = /* GraphQL */ `
  mutation UpdateInvoiceItem(
    $input: UpdateInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    updateInvoiceItem(input: $input, condition: $condition) {
      id
      invoice {
        id
        supplierId
        invoiceNumber
        date
        totalAmount
        imageUrl
        createdAt
        updatedAt
        supplierInvoicesId
        __typename
      }
      invoiceId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      weight
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      inventoryItemInvoiceItemsId
      invoiceItemsId
      __typename
    }
  }
`;
export const deleteInvoiceItem = /* GraphQL */ `
  mutation DeleteInvoiceItem(
    $input: DeleteInvoiceItemInput!
    $condition: ModelInvoiceItemConditionInput
  ) {
    deleteInvoiceItem(input: $input, condition: $condition) {
      id
      invoice {
        id
        supplierId
        invoiceNumber
        date
        totalAmount
        imageUrl
        createdAt
        updatedAt
        supplierInvoicesId
        __typename
      }
      invoiceId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      weight
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      inventoryItemInvoiceItemsId
      invoiceItemsId
      __typename
    }
  }
`;
export const createRejectionReason = /* GraphQL */ `
  mutation CreateRejectionReason(
    $input: CreateRejectionReasonInput!
    $condition: ModelRejectionReasonConditionInput
  ) {
    createRejectionReason(input: $input, condition: $condition) {
      id
      invoiceItem {
        id
        invoiceId
        inventoryItemId
        name
        totalQuantity
        acceptedQuantity
        weight
        pricePerUnit
        expiryDate
        accepted
        createdAt
        updatedAt
        inventoryItemInvoiceItemsId
        invoiceItemsId
        __typename
      }
      invoiceItemId
      reason
      createdAt
      updatedAt
      invoiceItemRejectionReasonsId
      __typename
    }
  }
`;
export const updateRejectionReason = /* GraphQL */ `
  mutation UpdateRejectionReason(
    $input: UpdateRejectionReasonInput!
    $condition: ModelRejectionReasonConditionInput
  ) {
    updateRejectionReason(input: $input, condition: $condition) {
      id
      invoiceItem {
        id
        invoiceId
        inventoryItemId
        name
        totalQuantity
        acceptedQuantity
        weight
        pricePerUnit
        expiryDate
        accepted
        createdAt
        updatedAt
        inventoryItemInvoiceItemsId
        invoiceItemsId
        __typename
      }
      invoiceItemId
      reason
      createdAt
      updatedAt
      invoiceItemRejectionReasonsId
      __typename
    }
  }
`;
export const deleteRejectionReason = /* GraphQL */ `
  mutation DeleteRejectionReason(
    $input: DeleteRejectionReasonInput!
    $condition: ModelRejectionReasonConditionInput
  ) {
    deleteRejectionReason(input: $input, condition: $condition) {
      id
      invoiceItem {
        id
        invoiceId
        inventoryItemId
        name
        totalQuantity
        acceptedQuantity
        weight
        pricePerUnit
        expiryDate
        accepted
        createdAt
        updatedAt
        inventoryItemInvoiceItemsId
        invoiceItemsId
        __typename
      }
      invoiceItemId
      reason
      createdAt
      updatedAt
      invoiceItemRejectionReasonsId
      __typename
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      name
      description
      preparationTime
      cookingTime
      recipeItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      name
      description
      preparationTime
      cookingTime
      recipeItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      name
      description
      preparationTime
      cookingTime
      recipeItems {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRecipeItem = /* GraphQL */ `
  mutation CreateRecipeItem(
    $input: CreateRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    createRecipeItem(input: $input, condition: $condition) {
      id
      recipe {
        id
        name
        description
        preparationTime
        cookingTime
        createdAt
        updatedAt
        __typename
      }
      recipeId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantityUsed
      wasteGenerated
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
      recipeRecipeItemsId
      __typename
    }
  }
`;
export const updateRecipeItem = /* GraphQL */ `
  mutation UpdateRecipeItem(
    $input: UpdateRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    updateRecipeItem(input: $input, condition: $condition) {
      id
      recipe {
        id
        name
        description
        preparationTime
        cookingTime
        createdAt
        updatedAt
        __typename
      }
      recipeId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantityUsed
      wasteGenerated
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
      recipeRecipeItemsId
      __typename
    }
  }
`;
export const deleteRecipeItem = /* GraphQL */ `
  mutation DeleteRecipeItem(
    $input: DeleteRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    deleteRecipeItem(input: $input, condition: $condition) {
      id
      recipe {
        id
        name
        description
        preparationTime
        cookingTime
        createdAt
        updatedAt
        __typename
      }
      recipeId
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantityUsed
      wasteGenerated
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
      recipeRecipeItemsId
      __typename
    }
  }
`;
export const createWasteItem = /* GraphQL */ `
  mutation CreateWasteItem(
    $input: CreateWasteItemInput!
    $condition: ModelWasteItemConditionInput
  ) {
    createWasteItem(input: $input, condition: $condition) {
      id
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantity
      date
      reason
      createdAt
      updatedAt
      inventoryItemWasteId
      __typename
    }
  }
`;
export const updateWasteItem = /* GraphQL */ `
  mutation UpdateWasteItem(
    $input: UpdateWasteItemInput!
    $condition: ModelWasteItemConditionInput
  ) {
    updateWasteItem(input: $input, condition: $condition) {
      id
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantity
      date
      reason
      createdAt
      updatedAt
      inventoryItemWasteId
      __typename
    }
  }
`;
export const deleteWasteItem = /* GraphQL */ `
  mutation DeleteWasteItem(
    $input: DeleteWasteItemInput!
    $condition: ModelWasteItemConditionInput
  ) {
    deleteWasteItem(input: $input, condition: $condition) {
      id
      inventoryItem {
        id
        name
        weight
        averagePrice
        catalogItemId
        createdAt
        updatedAt
        catalogItemInventoryItemsId
        __typename
      }
      inventoryItemId
      quantity
      date
      reason
      createdAt
      updatedAt
      inventoryItemWasteId
      __typename
    }
  }
`;
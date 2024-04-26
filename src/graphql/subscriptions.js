/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onCreateSupplier(filter: $filter) {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onUpdateSupplier(filter: $filter) {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier($filter: ModelSubscriptionSupplierFilterInput) {
    onDeleteSupplier(filter: $filter) {
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
export const onCreateCatalogItem = /* GraphQL */ `
  subscription OnCreateCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
  ) {
    onCreateCatalogItem(filter: $filter) {
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
export const onUpdateCatalogItem = /* GraphQL */ `
  subscription OnUpdateCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
  ) {
    onUpdateCatalogItem(filter: $filter) {
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
export const onDeleteCatalogItem = /* GraphQL */ `
  subscription OnDeleteCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
  ) {
    onDeleteCatalogItem(filter: $filter) {
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
export const onCreateInventoryItem = /* GraphQL */ `
  subscription OnCreateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onCreateInventoryItem(filter: $filter) {
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
export const onUpdateInventoryItem = /* GraphQL */ `
  subscription OnUpdateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onUpdateInventoryItem(filter: $filter) {
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
export const onDeleteInventoryItem = /* GraphQL */ `
  subscription OnDeleteInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
  ) {
    onDeleteInventoryItem(filter: $filter) {
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
export const onCreateSupplierInventoryLink = /* GraphQL */ `
  subscription OnCreateSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
  ) {
    onCreateSupplierInventoryLink(filter: $filter) {
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
export const onUpdateSupplierInventoryLink = /* GraphQL */ `
  subscription OnUpdateSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
  ) {
    onUpdateSupplierInventoryLink(filter: $filter) {
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
export const onDeleteSupplierInventoryLink = /* GraphQL */ `
  subscription OnDeleteSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
  ) {
    onDeleteSupplierInventoryLink(filter: $filter) {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onCreateInvoice(filter: $filter) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onUpdateInvoice(filter: $filter) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice($filter: ModelSubscriptionInvoiceFilterInput) {
    onDeleteInvoice(filter: $filter) {
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
export const onCreateInvoiceItem = /* GraphQL */ `
  subscription OnCreateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
  ) {
    onCreateInvoiceItem(filter: $filter) {
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
export const onUpdateInvoiceItem = /* GraphQL */ `
  subscription OnUpdateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
  ) {
    onUpdateInvoiceItem(filter: $filter) {
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
export const onDeleteInvoiceItem = /* GraphQL */ `
  subscription OnDeleteInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
  ) {
    onDeleteInvoiceItem(filter: $filter) {
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
export const onCreateRejectionReason = /* GraphQL */ `
  subscription OnCreateRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
  ) {
    onCreateRejectionReason(filter: $filter) {
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
export const onUpdateRejectionReason = /* GraphQL */ `
  subscription OnUpdateRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
  ) {
    onUpdateRejectionReason(filter: $filter) {
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
export const onDeleteRejectionReason = /* GraphQL */ `
  subscription OnDeleteRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
  ) {
    onDeleteRejectionReason(filter: $filter) {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onCreateRecipe(filter: $filter) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onUpdateRecipe(filter: $filter) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($filter: ModelSubscriptionRecipeFilterInput) {
    onDeleteRecipe(filter: $filter) {
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
export const onCreateRecipeItem = /* GraphQL */ `
  subscription OnCreateRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
  ) {
    onCreateRecipeItem(filter: $filter) {
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
export const onUpdateRecipeItem = /* GraphQL */ `
  subscription OnUpdateRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
  ) {
    onUpdateRecipeItem(filter: $filter) {
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
export const onDeleteRecipeItem = /* GraphQL */ `
  subscription OnDeleteRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
  ) {
    onDeleteRecipeItem(filter: $filter) {
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
export const onCreateWasteItem = /* GraphQL */ `
  subscription OnCreateWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
  ) {
    onCreateWasteItem(filter: $filter) {
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
export const onUpdateWasteItem = /* GraphQL */ `
  subscription OnUpdateWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
  ) {
    onUpdateWasteItem(filter: $filter) {
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
export const onDeleteWasteItem = /* GraphQL */ `
  subscription OnDeleteWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
  ) {
    onDeleteWasteItem(filter: $filter) {
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

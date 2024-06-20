/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSupplier = /* GraphQL */ `
  subscription OnCreateSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onCreateSupplier(filter: $filter, owner: $owner) {
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
export const onUpdateSupplier = /* GraphQL */ `
  subscription OnUpdateSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onUpdateSupplier(filter: $filter, owner: $owner) {
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
export const onDeleteSupplier = /* GraphQL */ `
  subscription OnDeleteSupplier(
    $filter: ModelSubscriptionSupplierFilterInput
    $owner: String
  ) {
    onDeleteSupplier(filter: $filter, owner: $owner) {
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
export const onCreateCatalogItem = /* GraphQL */ `
  subscription OnCreateCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
    $owner: String
  ) {
    onCreateCatalogItem(filter: $filter, owner: $owner) {
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
export const onUpdateCatalogItem = /* GraphQL */ `
  subscription OnUpdateCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
    $owner: String
  ) {
    onUpdateCatalogItem(filter: $filter, owner: $owner) {
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
export const onDeleteCatalogItem = /* GraphQL */ `
  subscription OnDeleteCatalogItem(
    $filter: ModelSubscriptionCatalogItemFilterInput
    $owner: String
  ) {
    onDeleteCatalogItem(filter: $filter, owner: $owner) {
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
export const onCreateInventoryItem = /* GraphQL */ `
  subscription OnCreateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
    $owner: String
  ) {
    onCreateInventoryItem(filter: $filter, owner: $owner) {
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
export const onUpdateInventoryItem = /* GraphQL */ `
  subscription OnUpdateInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
    $owner: String
  ) {
    onUpdateInventoryItem(filter: $filter, owner: $owner) {
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
export const onDeleteInventoryItem = /* GraphQL */ `
  subscription OnDeleteInventoryItem(
    $filter: ModelSubscriptionInventoryItemFilterInput
    $owner: String
  ) {
    onDeleteInventoryItem(filter: $filter, owner: $owner) {
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
export const onCreateSupplierInventoryLink = /* GraphQL */ `
  subscription OnCreateSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
    $owner: String
  ) {
    onCreateSupplierInventoryLink(filter: $filter, owner: $owner) {
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
export const onUpdateSupplierInventoryLink = /* GraphQL */ `
  subscription OnUpdateSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
    $owner: String
  ) {
    onUpdateSupplierInventoryLink(filter: $filter, owner: $owner) {
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
export const onDeleteSupplierInventoryLink = /* GraphQL */ `
  subscription OnDeleteSupplierInventoryLink(
    $filter: ModelSubscriptionSupplierInventoryLinkFilterInput
    $owner: String
  ) {
    onDeleteSupplierInventoryLink(filter: $filter, owner: $owner) {
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
export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onCreateInvoice(filter: $filter, owner: $owner) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onUpdateInvoice(filter: $filter, owner: $owner) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice(
    $filter: ModelSubscriptionInvoiceFilterInput
    $owner: String
  ) {
    onDeleteInvoice(filter: $filter, owner: $owner) {
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
export const onCreateInvoiceItem = /* GraphQL */ `
  subscription OnCreateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $owner: String
  ) {
    onCreateInvoiceItem(filter: $filter, owner: $owner) {
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
export const onUpdateInvoiceItem = /* GraphQL */ `
  subscription OnUpdateInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $owner: String
  ) {
    onUpdateInvoiceItem(filter: $filter, owner: $owner) {
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
export const onDeleteInvoiceItem = /* GraphQL */ `
  subscription OnDeleteInvoiceItem(
    $filter: ModelSubscriptionInvoiceItemFilterInput
    $owner: String
  ) {
    onDeleteInvoiceItem(filter: $filter, owner: $owner) {
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
export const onCreateRejectionReason = /* GraphQL */ `
  subscription OnCreateRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
    $owner: String
  ) {
    onCreateRejectionReason(filter: $filter, owner: $owner) {
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
export const onUpdateRejectionReason = /* GraphQL */ `
  subscription OnUpdateRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
    $owner: String
  ) {
    onUpdateRejectionReason(filter: $filter, owner: $owner) {
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
export const onDeleteRejectionReason = /* GraphQL */ `
  subscription OnDeleteRejectionReason(
    $filter: ModelSubscriptionRejectionReasonFilterInput
    $owner: String
  ) {
    onDeleteRejectionReason(filter: $filter, owner: $owner) {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onCreateRecipe(filter: $filter, owner: $owner) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onUpdateRecipe(filter: $filter, owner: $owner) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe(
    $filter: ModelSubscriptionRecipeFilterInput
    $owner: String
  ) {
    onDeleteRecipe(filter: $filter, owner: $owner) {
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
export const onCreateRecipeItem = /* GraphQL */ `
  subscription OnCreateRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
    $owner: String
  ) {
    onCreateRecipeItem(filter: $filter, owner: $owner) {
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
export const onUpdateRecipeItem = /* GraphQL */ `
  subscription OnUpdateRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
    $owner: String
  ) {
    onUpdateRecipeItem(filter: $filter, owner: $owner) {
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
export const onDeleteRecipeItem = /* GraphQL */ `
  subscription OnDeleteRecipeItem(
    $filter: ModelSubscriptionRecipeItemFilterInput
    $owner: String
  ) {
    onDeleteRecipeItem(filter: $filter, owner: $owner) {
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
export const onCreateWasteItem = /* GraphQL */ `
  subscription OnCreateWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
    $owner: String
  ) {
    onCreateWasteItem(filter: $filter, owner: $owner) {
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
export const onUpdateWasteItem = /* GraphQL */ `
  subscription OnUpdateWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
    $owner: String
  ) {
    onUpdateWasteItem(filter: $filter, owner: $owner) {
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
export const onDeleteWasteItem = /* GraphQL */ `
  subscription OnDeleteWasteItem(
    $filter: ModelSubscriptionWasteItemFilterInput
    $owner: String
  ) {
    onDeleteWasteItem(filter: $filter, owner: $owner) {
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

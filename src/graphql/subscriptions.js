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
      inventoryItems {
        nextToken
        __typename
      }
      invoices {
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
      inventoryItems {
        nextToken
        __typename
      }
      invoices {
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
      inventoryItems {
        nextToken
        __typename
      }
      invoices {
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
      suppliers {
        nextToken
        __typename
      }
      orderList {
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
      suppliers {
        nextToken
        __typename
      }
      orderList {
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
      suppliers {
        nextToken
        __typename
      }
      orderList {
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
export const onCreateOrderList = /* GraphQL */ `
  subscription OnCreateOrderList(
    $filter: ModelSubscriptionOrderListFilterInput
    $owner: String
  ) {
    onCreateOrderList(filter: $filter, owner: $owner) {
      id
      name
      inventoryItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateOrderList = /* GraphQL */ `
  subscription OnUpdateOrderList(
    $filter: ModelSubscriptionOrderListFilterInput
    $owner: String
  ) {
    onUpdateOrderList(filter: $filter, owner: $owner) {
      id
      name
      inventoryItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteOrderList = /* GraphQL */ `
  subscription OnDeleteOrderList(
    $filter: ModelSubscriptionOrderListFilterInput
    $owner: String
  ) {
    onDeleteOrderList(filter: $filter, owner: $owner) {
      id
      name
      inventoryItem {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem(
    $filter: ModelSubscriptionMenuItemFilterInput
    $owner: String
  ) {
    onCreateMenuItem(filter: $filter, owner: $owner) {
      id
      name
      description
      price
      recipes {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem(
    $filter: ModelSubscriptionMenuItemFilterInput
    $owner: String
  ) {
    onUpdateMenuItem(filter: $filter, owner: $owner) {
      id
      name
      description
      price
      recipes {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem(
    $filter: ModelSubscriptionMenuItemFilterInput
    $owner: String
  ) {
    onDeleteMenuItem(filter: $filter, owner: $owner) {
      id
      name
      description
      price
      recipes {
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
export const onCreatePrepList = /* GraphQL */ `
  subscription OnCreatePrepList(
    $filter: ModelSubscriptionPrepListFilterInput
    $owner: String
  ) {
    onCreatePrepList(filter: $filter, owner: $owner) {
      id
      name
      recipes {
        nextToken
        __typename
      }
      recipeItems {
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
export const onUpdatePrepList = /* GraphQL */ `
  subscription OnUpdatePrepList(
    $filter: ModelSubscriptionPrepListFilterInput
    $owner: String
  ) {
    onUpdatePrepList(filter: $filter, owner: $owner) {
      id
      name
      recipes {
        nextToken
        __typename
      }
      recipeItems {
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
export const onDeletePrepList = /* GraphQL */ `
  subscription OnDeletePrepList(
    $filter: ModelSubscriptionPrepListFilterInput
    $owner: String
  ) {
    onDeletePrepList(filter: $filter, owner: $owner) {
      id
      name
      recipes {
        nextToken
        __typename
      }
      recipeItems {
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
      prepList {
        nextToken
        __typename
      }
      menuItems {
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
      prepList {
        nextToken
        __typename
      }
      menuItems {
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
      prepList {
        nextToken
        __typename
      }
      menuItems {
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
      recipes {
        nextToken
        __typename
      }
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
      prepList {
        nextToken
        __typename
      }
      wasteGenerated
      groups
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
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
      recipes {
        nextToken
        __typename
      }
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
      prepList {
        nextToken
        __typename
      }
      wasteGenerated
      groups
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
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
      recipes {
        nextToken
        __typename
      }
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
      prepList {
        nextToken
        __typename
      }
      wasteGenerated
      groups
      createdAt
      updatedAt
      inventoryItemUsedInRecipesId
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
export const onCreateSupplierInventory = /* GraphQL */ `
  subscription OnCreateSupplierInventory(
    $filter: ModelSubscriptionSupplierInventoryFilterInput
    $owner: String
  ) {
    onCreateSupplierInventory(filter: $filter, owner: $owner) {
      id
      supplierId
      inventoryItemId
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateSupplierInventory = /* GraphQL */ `
  subscription OnUpdateSupplierInventory(
    $filter: ModelSubscriptionSupplierInventoryFilterInput
    $owner: String
  ) {
    onUpdateSupplierInventory(filter: $filter, owner: $owner) {
      id
      supplierId
      inventoryItemId
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteSupplierInventory = /* GraphQL */ `
  subscription OnDeleteSupplierInventory(
    $filter: ModelSubscriptionSupplierInventoryFilterInput
    $owner: String
  ) {
    onDeleteSupplierInventory(filter: $filter, owner: $owner) {
      id
      supplierId
      inventoryItemId
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateInventoryItemOrder = /* GraphQL */ `
  subscription OnCreateInventoryItemOrder(
    $filter: ModelSubscriptionInventoryItemOrderFilterInput
    $owner: String
  ) {
    onCreateInventoryItemOrder(filter: $filter, owner: $owner) {
      id
      inventoryItemId
      orderListId
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
      orderList {
        id
        name
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateInventoryItemOrder = /* GraphQL */ `
  subscription OnUpdateInventoryItemOrder(
    $filter: ModelSubscriptionInventoryItemOrderFilterInput
    $owner: String
  ) {
    onUpdateInventoryItemOrder(filter: $filter, owner: $owner) {
      id
      inventoryItemId
      orderListId
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
      orderList {
        id
        name
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteInventoryItemOrder = /* GraphQL */ `
  subscription OnDeleteInventoryItemOrder(
    $filter: ModelSubscriptionInventoryItemOrderFilterInput
    $owner: String
  ) {
    onDeleteInventoryItemOrder(filter: $filter, owner: $owner) {
      id
      inventoryItemId
      orderListId
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
      orderList {
        id
        name
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateMenuRecipe = /* GraphQL */ `
  subscription OnCreateMenuRecipe(
    $filter: ModelSubscriptionMenuRecipeFilterInput
    $owner: String
  ) {
    onCreateMenuRecipe(filter: $filter, owner: $owner) {
      id
      menuItemId
      recipeId
      menuItem {
        id
        name
        description
        price
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateMenuRecipe = /* GraphQL */ `
  subscription OnUpdateMenuRecipe(
    $filter: ModelSubscriptionMenuRecipeFilterInput
    $owner: String
  ) {
    onUpdateMenuRecipe(filter: $filter, owner: $owner) {
      id
      menuItemId
      recipeId
      menuItem {
        id
        name
        description
        price
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteMenuRecipe = /* GraphQL */ `
  subscription OnDeleteMenuRecipe(
    $filter: ModelSubscriptionMenuRecipeFilterInput
    $owner: String
  ) {
    onDeleteMenuRecipe(filter: $filter, owner: $owner) {
      id
      menuItemId
      recipeId
      menuItem {
        id
        name
        description
        price
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePrepListRecipe = /* GraphQL */ `
  subscription OnCreatePrepListRecipe(
    $filter: ModelSubscriptionPrepListRecipeFilterInput
    $owner: String
  ) {
    onCreatePrepListRecipe(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePrepListRecipe = /* GraphQL */ `
  subscription OnUpdatePrepListRecipe(
    $filter: ModelSubscriptionPrepListRecipeFilterInput
    $owner: String
  ) {
    onUpdatePrepListRecipe(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePrepListRecipe = /* GraphQL */ `
  subscription OnDeletePrepListRecipe(
    $filter: ModelSubscriptionPrepListRecipeFilterInput
    $owner: String
  ) {
    onDeletePrepListRecipe(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
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
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreatePrepListRecipeItem = /* GraphQL */ `
  subscription OnCreatePrepListRecipeItem(
    $filter: ModelSubscriptionPrepListRecipeItemFilterInput
    $owner: String
  ) {
    onCreatePrepListRecipeItem(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeItemId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdatePrepListRecipeItem = /* GraphQL */ `
  subscription OnUpdatePrepListRecipeItem(
    $filter: ModelSubscriptionPrepListRecipeItemFilterInput
    $owner: String
  ) {
    onUpdatePrepListRecipeItem(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeItemId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeletePrepListRecipeItem = /* GraphQL */ `
  subscription OnDeletePrepListRecipeItem(
    $filter: ModelSubscriptionPrepListRecipeItemFilterInput
    $owner: String
  ) {
    onDeletePrepListRecipeItem(filter: $filter, owner: $owner) {
      id
      prepListId
      recipeItemId
      prepList {
        id
        name
        groups
        createdAt
        updatedAt
        owner
        __typename
      }
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onCreateRecipeRecipeItem = /* GraphQL */ `
  subscription OnCreateRecipeRecipeItem(
    $filter: ModelSubscriptionRecipeRecipeItemFilterInput
    $owner: String
  ) {
    onCreateRecipeRecipeItem(filter: $filter, owner: $owner) {
      id
      recipeId
      recipeItemId
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
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateRecipeRecipeItem = /* GraphQL */ `
  subscription OnUpdateRecipeRecipeItem(
    $filter: ModelSubscriptionRecipeRecipeItemFilterInput
    $owner: String
  ) {
    onUpdateRecipeRecipeItem(filter: $filter, owner: $owner) {
      id
      recipeId
      recipeItemId
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
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteRecipeRecipeItem = /* GraphQL */ `
  subscription OnDeleteRecipeRecipeItem(
    $filter: ModelSubscriptionRecipeRecipeItemFilterInput
    $owner: String
  ) {
    onDeleteRecipeRecipeItem(filter: $filter, owner: $owner) {
      id
      recipeId
      recipeItemId
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
      recipeItem {
        id
        inventoryItemId
        quantityUsed
        wasteGenerated
        groups
        createdAt
        updatedAt
        inventoryItemUsedInRecipesId
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;

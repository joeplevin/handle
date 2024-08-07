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
export const createInventoryItem = /* GraphQL */ `
  mutation CreateInventoryItem(
    $input: CreateInventoryItemInput!
    $condition: ModelInventoryItemConditionInput
  ) {
    createInventoryItem(input: $input, condition: $condition) {
      id
      name
      totalQuantity
      totalWeight
      unitWeight
      unitMeasurement
      unitAveragePrice
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
      owner
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
      totalQuantity
      totalWeight
      unitWeight
      unitMeasurement
      unitAveragePrice
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
      owner
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
      totalQuantity
      totalWeight
      unitWeight
      unitMeasurement
      unitAveragePrice
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
      owner
      __typename
    }
  }
`;
export const createOrderList = /* GraphQL */ `
  mutation CreateOrderList(
    $input: CreateOrderListInput!
    $condition: ModelOrderListConditionInput
  ) {
    createOrderList(input: $input, condition: $condition) {
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
export const updateOrderList = /* GraphQL */ `
  mutation UpdateOrderList(
    $input: UpdateOrderListInput!
    $condition: ModelOrderListConditionInput
  ) {
    updateOrderList(input: $input, condition: $condition) {
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
export const deleteOrderList = /* GraphQL */ `
  mutation DeleteOrderList(
    $input: DeleteOrderListInput!
    $condition: ModelOrderListConditionInput
  ) {
    deleteOrderList(input: $input, condition: $condition) {
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
        owner
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      unitWeight
      unitMeasurement
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
        owner
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      unitWeight
      unitMeasurement
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
        owner
        __typename
      }
      inventoryItemId
      name
      totalQuantity
      acceptedQuantity
      unitWeight
      unitMeasurement
      pricePerUnit
      expiryDate
      accepted
      rejectionReasons
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
export const createMenuItem = /* GraphQL */ `
  mutation CreateMenuItem(
    $input: CreateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    createMenuItem(input: $input, condition: $condition) {
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
export const updateMenuItem = /* GraphQL */ `
  mutation UpdateMenuItem(
    $input: UpdateMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    updateMenuItem(input: $input, condition: $condition) {
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
export const deleteMenuItem = /* GraphQL */ `
  mutation DeleteMenuItem(
    $input: DeleteMenuItemInput!
    $condition: ModelMenuItemConditionInput
  ) {
    deleteMenuItem(input: $input, condition: $condition) {
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
export const createPrepList = /* GraphQL */ `
  mutation CreatePrepList(
    $input: CreatePrepListInput!
    $condition: ModelPrepListConditionInput
  ) {
    createPrepList(input: $input, condition: $condition) {
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
export const updatePrepList = /* GraphQL */ `
  mutation UpdatePrepList(
    $input: UpdatePrepListInput!
    $condition: ModelPrepListConditionInput
  ) {
    updatePrepList(input: $input, condition: $condition) {
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
export const deletePrepList = /* GraphQL */ `
  mutation DeletePrepList(
    $input: DeletePrepListInput!
    $condition: ModelPrepListConditionInput
  ) {
    deletePrepList(input: $input, condition: $condition) {
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
export const createRecipeItem = /* GraphQL */ `
  mutation CreateRecipeItem(
    $input: CreateRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    createRecipeItem(input: $input, condition: $condition) {
      id
      recipes {
        nextToken
        __typename
      }
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const updateRecipeItem = /* GraphQL */ `
  mutation UpdateRecipeItem(
    $input: UpdateRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    updateRecipeItem(input: $input, condition: $condition) {
      id
      recipes {
        nextToken
        __typename
      }
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const deleteRecipeItem = /* GraphQL */ `
  mutation DeleteRecipeItem(
    $input: DeleteRecipeItemInput!
    $condition: ModelRecipeItemConditionInput
  ) {
    deleteRecipeItem(input: $input, condition: $condition) {
      id
      recipes {
        nextToken
        __typename
      }
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const createSupplierInventory = /* GraphQL */ `
  mutation CreateSupplierInventory(
    $input: CreateSupplierInventoryInput!
    $condition: ModelSupplierInventoryConditionInput
  ) {
    createSupplierInventory(input: $input, condition: $condition) {
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
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
export const updateSupplierInventory = /* GraphQL */ `
  mutation UpdateSupplierInventory(
    $input: UpdateSupplierInventoryInput!
    $condition: ModelSupplierInventoryConditionInput
  ) {
    updateSupplierInventory(input: $input, condition: $condition) {
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
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
export const deleteSupplierInventory = /* GraphQL */ `
  mutation DeleteSupplierInventory(
    $input: DeleteSupplierInventoryInput!
    $condition: ModelSupplierInventoryConditionInput
  ) {
    deleteSupplierInventory(input: $input, condition: $condition) {
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
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
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
export const createInventoryItemOrder = /* GraphQL */ `
  mutation CreateInventoryItemOrder(
    $input: CreateInventoryItemOrderInput!
    $condition: ModelInventoryItemOrderConditionInput
  ) {
    createInventoryItemOrder(input: $input, condition: $condition) {
      id
      inventoryItemId
      orderListId
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const updateInventoryItemOrder = /* GraphQL */ `
  mutation UpdateInventoryItemOrder(
    $input: UpdateInventoryItemOrderInput!
    $condition: ModelInventoryItemOrderConditionInput
  ) {
    updateInventoryItemOrder(input: $input, condition: $condition) {
      id
      inventoryItemId
      orderListId
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const deleteInventoryItemOrder = /* GraphQL */ `
  mutation DeleteInventoryItemOrder(
    $input: DeleteInventoryItemOrderInput!
    $condition: ModelInventoryItemOrderConditionInput
  ) {
    deleteInventoryItemOrder(input: $input, condition: $condition) {
      id
      inventoryItemId
      orderListId
      inventoryItem {
        id
        name
        totalQuantity
        totalWeight
        unitWeight
        unitMeasurement
        unitAveragePrice
        groups
        minQuantity
        createdAt
        updatedAt
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
export const createMenuRecipe = /* GraphQL */ `
  mutation CreateMenuRecipe(
    $input: CreateMenuRecipeInput!
    $condition: ModelMenuRecipeConditionInput
  ) {
    createMenuRecipe(input: $input, condition: $condition) {
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
export const updateMenuRecipe = /* GraphQL */ `
  mutation UpdateMenuRecipe(
    $input: UpdateMenuRecipeInput!
    $condition: ModelMenuRecipeConditionInput
  ) {
    updateMenuRecipe(input: $input, condition: $condition) {
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
export const deleteMenuRecipe = /* GraphQL */ `
  mutation DeleteMenuRecipe(
    $input: DeleteMenuRecipeInput!
    $condition: ModelMenuRecipeConditionInput
  ) {
    deleteMenuRecipe(input: $input, condition: $condition) {
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
export const createPrepListRecipe = /* GraphQL */ `
  mutation CreatePrepListRecipe(
    $input: CreatePrepListRecipeInput!
    $condition: ModelPrepListRecipeConditionInput
  ) {
    createPrepListRecipe(input: $input, condition: $condition) {
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
export const updatePrepListRecipe = /* GraphQL */ `
  mutation UpdatePrepListRecipe(
    $input: UpdatePrepListRecipeInput!
    $condition: ModelPrepListRecipeConditionInput
  ) {
    updatePrepListRecipe(input: $input, condition: $condition) {
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
export const deletePrepListRecipe = /* GraphQL */ `
  mutation DeletePrepListRecipe(
    $input: DeletePrepListRecipeInput!
    $condition: ModelPrepListRecipeConditionInput
  ) {
    deletePrepListRecipe(input: $input, condition: $condition) {
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
export const createPrepListRecipeItem = /* GraphQL */ `
  mutation CreatePrepListRecipeItem(
    $input: CreatePrepListRecipeItemInput!
    $condition: ModelPrepListRecipeItemConditionInput
  ) {
    createPrepListRecipeItem(input: $input, condition: $condition) {
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
export const updatePrepListRecipeItem = /* GraphQL */ `
  mutation UpdatePrepListRecipeItem(
    $input: UpdatePrepListRecipeItemInput!
    $condition: ModelPrepListRecipeItemConditionInput
  ) {
    updatePrepListRecipeItem(input: $input, condition: $condition) {
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
export const deletePrepListRecipeItem = /* GraphQL */ `
  mutation DeletePrepListRecipeItem(
    $input: DeletePrepListRecipeItemInput!
    $condition: ModelPrepListRecipeItemConditionInput
  ) {
    deletePrepListRecipeItem(input: $input, condition: $condition) {
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
export const createRecipeRecipeItem = /* GraphQL */ `
  mutation CreateRecipeRecipeItem(
    $input: CreateRecipeRecipeItemInput!
    $condition: ModelRecipeRecipeItemConditionInput
  ) {
    createRecipeRecipeItem(input: $input, condition: $condition) {
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
export const updateRecipeRecipeItem = /* GraphQL */ `
  mutation UpdateRecipeRecipeItem(
    $input: UpdateRecipeRecipeItemInput!
    $condition: ModelRecipeRecipeItemConditionInput
  ) {
    updateRecipeRecipeItem(input: $input, condition: $condition) {
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
export const deleteRecipeRecipeItem = /* GraphQL */ `
  mutation DeleteRecipeRecipeItem(
    $input: DeleteRecipeRecipeItemInput!
    $condition: ModelRecipeRecipeItemConditionInput
  ) {
    deleteRecipeRecipeItem(input: $input, condition: $condition) {
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

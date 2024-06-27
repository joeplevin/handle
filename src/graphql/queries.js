/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSupplierInvoices = /* GraphQL */ `
  query MyQuery2($id: ID!) {
    getSupplier(id: $id) {
      invoices {
        items {
          invoiceNumber
        }
      }
    }
  }
`;

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
export const getOrderList = /* GraphQL */ `
  query GetOrderList($id: ID!) {
    getOrderList(id: $id) {
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
export const listOrderLists = /* GraphQL */ `
  query ListOrderLists(
    $filter: ModelOrderListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const getMenuItem = /* GraphQL */ `
  query GetMenuItem($id: ID!) {
    getMenuItem(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getPrepList = /* GraphQL */ `
  query GetPrepList($id: ID!) {
    getPrepList(id: $id) {
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
export const listPrepLists = /* GraphQL */ `
  query ListPrepLists(
    $filter: ModelPrepListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrepLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
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
export const listRecipeItems = /* GraphQL */ `
  query ListRecipeItems(
    $filter: ModelRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
export const getSupplierInventory = /* GraphQL */ `
  query GetSupplierInventory($id: ID!) {
    getSupplierInventory(id: $id) {
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
export const listSupplierInventories = /* GraphQL */ `
  query ListSupplierInventories(
    $filter: ModelSupplierInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupplierInventories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        supplierId
        inventoryItemId
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
export const getInventoryItemOrder = /* GraphQL */ `
  query GetInventoryItemOrder($id: ID!) {
    getInventoryItemOrder(id: $id) {
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
export const listInventoryItemOrders = /* GraphQL */ `
  query ListInventoryItemOrders(
    $filter: ModelInventoryItemOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInventoryItemOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inventoryItemId
        orderListId
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
export const getMenuRecipe = /* GraphQL */ `
  query GetMenuRecipe($id: ID!) {
    getMenuRecipe(id: $id) {
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
export const listMenuRecipes = /* GraphQL */ `
  query ListMenuRecipes(
    $filter: ModelMenuRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menuItemId
        recipeId
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
export const getPrepListRecipe = /* GraphQL */ `
  query GetPrepListRecipe($id: ID!) {
    getPrepListRecipe(id: $id) {
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
export const listPrepListRecipes = /* GraphQL */ `
  query ListPrepListRecipes(
    $filter: ModelPrepListRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrepListRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        prepListId
        recipeId
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
export const getPrepListRecipeItem = /* GraphQL */ `
  query GetPrepListRecipeItem($id: ID!) {
    getPrepListRecipeItem(id: $id) {
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
export const listPrepListRecipeItems = /* GraphQL */ `
  query ListPrepListRecipeItems(
    $filter: ModelPrepListRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrepListRecipeItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        prepListId
        recipeItemId
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
export const getRecipeRecipeItem = /* GraphQL */ `
  query GetRecipeRecipeItem($id: ID!) {
    getRecipeRecipeItem(id: $id) {
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
export const listRecipeRecipeItems = /* GraphQL */ `
  query ListRecipeRecipeItems(
    $filter: ModelRecipeRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeRecipeItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        recipeItemId
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
export const supplierInventoriesBySupplierId = /* GraphQL */ `
  query SupplierInventoriesBySupplierId(
    $supplierId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSupplierInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    supplierInventoriesBySupplierId(
      supplierId: $supplierId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        supplierId
        inventoryItemId
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
export const supplierInventoriesByInventoryItemId = /* GraphQL */ `
  query SupplierInventoriesByInventoryItemId(
    $inventoryItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelSupplierInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    supplierInventoriesByInventoryItemId(
      inventoryItemId: $inventoryItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        supplierId
        inventoryItemId
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
export const inventoryItemOrdersByInventoryItemId = /* GraphQL */ `
  query InventoryItemOrdersByInventoryItemId(
    $inventoryItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryItemOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryItemOrdersByInventoryItemId(
      inventoryItemId: $inventoryItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inventoryItemId
        orderListId
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
export const inventoryItemOrdersByOrderListId = /* GraphQL */ `
  query InventoryItemOrdersByOrderListId(
    $orderListId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryItemOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    inventoryItemOrdersByOrderListId(
      orderListId: $orderListId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        inventoryItemId
        orderListId
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
export const menuRecipesByMenuItemId = /* GraphQL */ `
  query MenuRecipesByMenuItemId(
    $menuItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMenuRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    menuRecipesByMenuItemId(
      menuItemId: $menuItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        menuItemId
        recipeId
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
export const menuRecipesByRecipeId = /* GraphQL */ `
  query MenuRecipesByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMenuRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    menuRecipesByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        menuItemId
        recipeId
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
export const prepListRecipesByPrepListId = /* GraphQL */ `
  query PrepListRecipesByPrepListId(
    $prepListId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrepListRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prepListRecipesByPrepListId(
      prepListId: $prepListId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        prepListId
        recipeId
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
export const prepListRecipesByRecipeId = /* GraphQL */ `
  query PrepListRecipesByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrepListRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prepListRecipesByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        prepListId
        recipeId
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
export const prepListRecipeItemsByPrepListId = /* GraphQL */ `
  query PrepListRecipeItemsByPrepListId(
    $prepListId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrepListRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prepListRecipeItemsByPrepListId(
      prepListId: $prepListId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        prepListId
        recipeItemId
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
export const prepListRecipeItemsByRecipeItemId = /* GraphQL */ `
  query PrepListRecipeItemsByRecipeItemId(
    $recipeItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPrepListRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    prepListRecipeItemsByRecipeItemId(
      recipeItemId: $recipeItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        prepListId
        recipeItemId
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
export const recipeRecipeItemsByRecipeId = /* GraphQL */ `
  query RecipeRecipeItemsByRecipeId(
    $recipeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeRecipeItemsByRecipeId(
      recipeId: $recipeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        recipeItemId
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
export const recipeRecipeItemsByRecipeItemId = /* GraphQL */ `
  query RecipeRecipeItemsByRecipeItemId(
    $recipeItemId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecipeRecipeItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recipeRecipeItemsByRecipeItemId(
      recipeItemId: $recipeItemId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeId
        recipeItemId
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

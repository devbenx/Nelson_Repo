export interface IProduct {
        // Product Related
        attributes: Attributes,
}
// export interface IProduct {
//         // Product Related
//         name: Attributes['product_classification'],
//         description: Attributes['description_bullet_points'],
//         images: Attributes['media'],
//         attributes: ProductAttribute[], //"color", "inner_material", "outer_material", etc
//         article_number: Attributes['catalogue_number'],
//         sizes: ChildProduct[],
//         price: MinRegularPrice['amount'],
//         related: Category['name_path'],
//         // Brand related
//         brand_name: AttributesBrand['name'],
//         brand_description: AttributesBrand['description'],
//         brand_logo: LogoBrand['url'],
// } // could have a different approach

export interface Root {
        data: Data
}

export interface Data {
        type: string
        id: number
        attributes: Attributes
}

export interface Attributes {
        name: string
        slug: string
        state: string
        requires_shipping: boolean
        product_sku: string
        product_type: string
        product_classification: string
        catalogue_number: string
        description: string
        structure: string
        description_bullet_points: string[]
        brand: Brand
        product_attributes: ProductAttribute[]
        categories: Category[]
        main_image: MainImage
        media: Media[]
        product_variants: any[]
        product_collections: any[]
        rollup_attribute_set: string
        rollup_attributes: string[]
        child_products: ChildProduct[]
        price: Price2
}

export interface Brand {
        type: string
        id: number
        attributes: AttributesBrand
}

export interface AttributesBrand {
        name: string
        slug: string
        logo: LogoBrand
        description: string
}

export interface LogoBrand {
        type: string
        url: string
        variants: Variants
}

export interface Variants {
        thumbnail: string
        small_fit: string
        medium_fit: string
}

export interface ProductAttribute {
        name: string
        value: any
}

export interface Category {
        id: number
        name: string
        slug: string
        slug_path: string
        name_path: string
}

export interface MainImage {
        media_type: string
        media_source: string
        image_type: string
        image_sizes: ImageSizes
}

export interface ImageSizes {
        original: string
        large: string
        medium: string
        small: string
        thumbnail: string
}

export interface Media {
        media_type: string
        media_source: string
        image_type: string
        image_sizes: ImageSizes2
}

export interface ImageSizes2 {
        original: string
        large: string
        medium: string
        small: string
        thumbnail: string
}

export interface ChildProduct {
        id: number
        attributes: Attribute[]
        state: string
        estimated_delivery_date: EstimatedDeliveryDate
        product_sku: string
        catalogue_number: string
        stock: number
        delivery_promise: string
        price: Price
}

export interface Attribute {
        name: string
        value: any
}

export interface EstimatedDeliveryDate {
        earliest_date: string
        latest_date: string
        cutoff_datetime: string
}

export interface Price {
        type: string
        id: number
        attributes: Attributes3
}

export interface Attributes3 {
        channel_instance_id: number
        vat_percentage: number
        is_discounted: boolean
        sale_price: SalePrice
        sale_price_excl_vat: SalePriceExclVat
        regular_price: RegularPrice
        regular_price_excl_vat: RegularPriceExclVat
}

export interface SalePrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface SalePriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface RegularPrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface RegularPriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface Price2 {
        type: string
        id: number
        attributes: AttributesPrice
}

export interface AttributesPrice {
        channel_instance_id: number
        is_discounted: boolean
        min_sale_price: MinSalePrice
        min_sale_price_excl_vat: MinSalePriceExclVat
        min_regular_price: MinRegularPrice
        min_regular_price_excl_vat: MinRegularPriceExclVat
        max_sale_price: MaxSalePrice
        max_sale_price_excl_vat: MaxSalePriceExclVat
        max_regular_price: MaxRegularPrice
        max_regular_price_excl_vat: MaxRegularPriceExclVat
        available_min_sale_price: AvailableMinSalePrice
        available_min_sale_price_excl_vat: AvailableMinSalePriceExclVat
        available_min_regular_price: AvailableMinRegularPrice
        available_min_regular_price_excl_vat: AvailableMinRegularPriceExclVat
        available_max_sale_price: AvailableMaxSalePrice
        available_max_sale_price_excl_vat: AvailableMaxSalePriceExclVat
        available_max_regular_price: AvailableMaxRegularPrice
        available_max_regular_price_excl_vat: AvailableMaxRegularPriceExclVat
}

export interface MinSalePrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MinSalePriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MinRegularPrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MinRegularPriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MaxSalePrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MaxSalePriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MaxRegularPrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface MaxRegularPriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMinSalePrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMinSalePriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMinRegularPrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMinRegularPriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMaxSalePrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMaxSalePriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMaxRegularPrice {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface AvailableMaxRegularPriceExclVat {
        amount: number
        currency: string
        currency_symbol: string
        currency_symbol_html: string
        decimal_mark: string
        pre_decimal_str: string
        decimal_str: string
        formatted: string
}

export interface Root {
        data: Data
        links: Links
        meta: Meta
}

export interface Data {
        hits: Hit[]
        facets: Facets
}

export interface Hit {
        type: string
        attributes: Attributes
}

export interface Attributes {
        applies_to: AppliesTo[]
        product: Product
}

export interface AppliesTo {
        relationship_type: string
        product_id: number
}

export interface Product {
        type: string
        id: number
        attributes: Attributes2
}

export interface Attributes2 {
        catalogue_number: string
        main_image: MainImage
        product_attributes: ProductAttributes
        media: Medum[]
        structure: string
        product_sku: string
        product_classification: string
        product_type: string
        product_id: number
        name: string
        rollup_attribute_set: string
        state: string
        brand: Brand
        slug: string
        price: Price
        rollup_attributes: string[]
        _es_score: any
}

export interface MainImage {
        media_source: string
        media_type: string
        image_type: string
        image_sizes: ImageSizes
}

export interface ImageSizes {
        small: string
        thumbnail: string
        original: string
        large: string
        medium: string
}

export interface ProductAttributes {
        orderable_shoe_size_eu?: string[]
        shoe_size_eu?: string[]
        orderable_length?: string[]
        inner_material?: string
        color?: string
        length?: string[]
        outer_material?: string
}

export interface Medum {
        media_source: string
        media_type: string
        image_type: string
        image_sizes: ImageSizes2
}

export interface ImageSizes2 {
        small: string
        thumbnail: string
        original: string
        large: string
        medium: string
}

export interface Brand {
        name: string
}

export interface Price {
        is_discounted: boolean
        min_regular_price: MinRegularPrice
        min_sale_price: MinSalePrice
        max_regular_price: MaxRegularPrice
        max_sale_price: MaxSalePrice
        available_min_sale_price: AvailableMinSalePrice
        available_min_regular_price: AvailableMinRegularPrice
        available_max_sale_price: AvailableMaxSalePrice
        available_max_regular_price: AvailableMaxRegularPrice
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

export interface Facets { }

export interface Links {
        self: string
        first: string
        prev: any
        next: any
        last: string
}

export interface Meta {
        page_size: number
        page: number
        took: number
        total_items: number
        total_pages: number
}

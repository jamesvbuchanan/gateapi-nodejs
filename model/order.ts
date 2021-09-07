/**
 * Gate API v4
 * Welcome to Gate.io API  APIv4 provides spot, margin and futures trading operations. There are public APIs to retrieve the real-time market statistics, and private APIs which needs authentication to trade on user\'s behalf.
 *
 * Contact: support@mail.gate.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Spot order details
 */
export class Order {
    /**
     * Order ID
     */
    'id'?: string;
    /**
     * User defined information. If not empty, must follow the rules below:  1. prefixed with `t-` 2. no longer than 28 bytes without `t-` prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.)
     */
    'text'?: string;
    /**
     * Creation time of order
     */
    'createTime'?: string;
    /**
     * Last modification time of order
     */
    'updateTime'?: string;
    /**
     * Creation time of order (in milliseconds)
     */
    'createTimeMs'?: number;
    /**
     * Last modification time of order (in milliseconds)
     */
    'updateTimeMs'?: number;
    /**
     * Order status  - `open`: to be filled - `closed`: filled - `cancelled`: cancelled
     */
    'status'?: Order.Status;
    /**
     * Currency pair
     */
    'currencyPair': string;
    /**
     * Order type. limit - limit order
     */
    'type'?: Order.Type;
    /**
     * Account type. spot - use spot account; margin - use margin account; cross_margin - use cross margin account
     */
    'account'?: Order.Account;
    /**
     * Order side
     */
    'side': Order.Side;
    /**
     * Trade amount
     */
    'amount': string;
    /**
     * Order price
     */
    'price': string;
    /**
     * Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, makes a post-only order that always enjoys a maker fee
     */
    'timeInForce'?: Order.TimeInForce;
    /**
     * Amount to display for the iceberg order. Null or 0 for normal orders. Set to -1 to hide the order completely
     */
    'iceberg'?: string;
    /**
     * Used in margin or cross margin trading to allow automatic loan of insufficient amount if balance is not enough.
     */
    'autoBorrow'?: boolean;
    /**
     * Enable or disable automatic repayment for automatic borrow loan generated by cross margin order. Default is disabled. Note that:  1. This field is only effective for cross margin orders. Margin account does not support setting auto repayment for orders. 2. `auto_borrow` and `auto_repay` cannot be both set to true in one order.
     */
    'autoRepay'?: boolean;
    /**
     * Amount left to fill
     */
    'left'?: string;
    /**
     * Total filled in quote currency. Deprecated in favor of `filled_total`
     */
    'fillPrice'?: string;
    /**
     * Total filled in quote currency
     */
    'filledTotal'?: string;
    /**
     * Fee deducted
     */
    'fee'?: string;
    /**
     * Fee currency unit
     */
    'feeCurrency'?: string;
    /**
     * Points used to deduct fee
     */
    'pointFee'?: string;
    /**
     * GT used to deduct fee
     */
    'gtFee'?: string;
    /**
     * Whether GT fee discount is used
     */
    'gtDiscount'?: boolean;
    /**
     * Rebated fee
     */
    'rebatedFee'?: string;
    /**
     * Rebated fee currency unit
     */
    'rebatedFeeCurrency'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'string',
        },
        {
            name: 'updateTime',
            baseName: 'update_time',
            type: 'string',
        },
        {
            name: 'createTimeMs',
            baseName: 'create_time_ms',
            type: 'number',
        },
        {
            name: 'updateTimeMs',
            baseName: 'update_time_ms',
            type: 'number',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'Order.Status',
        },
        {
            name: 'currencyPair',
            baseName: 'currency_pair',
            type: 'string',
        },
        {
            name: 'type',
            baseName: 'type',
            type: 'Order.Type',
        },
        {
            name: 'account',
            baseName: 'account',
            type: 'Order.Account',
        },
        {
            name: 'side',
            baseName: 'side',
            type: 'Order.Side',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'timeInForce',
            baseName: 'time_in_force',
            type: 'Order.TimeInForce',
        },
        {
            name: 'iceberg',
            baseName: 'iceberg',
            type: 'string',
        },
        {
            name: 'autoBorrow',
            baseName: 'auto_borrow',
            type: 'boolean',
        },
        {
            name: 'autoRepay',
            baseName: 'auto_repay',
            type: 'boolean',
        },
        {
            name: 'left',
            baseName: 'left',
            type: 'string',
        },
        {
            name: 'fillPrice',
            baseName: 'fill_price',
            type: 'string',
        },
        {
            name: 'filledTotal',
            baseName: 'filled_total',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'feeCurrency',
            baseName: 'fee_currency',
            type: 'string',
        },
        {
            name: 'pointFee',
            baseName: 'point_fee',
            type: 'string',
        },
        {
            name: 'gtFee',
            baseName: 'gt_fee',
            type: 'string',
        },
        {
            name: 'gtDiscount',
            baseName: 'gt_discount',
            type: 'boolean',
        },
        {
            name: 'rebatedFee',
            baseName: 'rebated_fee',
            type: 'string',
        },
        {
            name: 'rebatedFeeCurrency',
            baseName: 'rebated_fee_currency',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return Order.attributeTypeMap;
    }
}

export namespace Order {
    export enum Status {
        Open = <any>'open',
        Closed = <any>'closed',
        Cancelled = <any>'cancelled',
    }
    export enum Type {
        Limit = <any>'limit',
    }
    export enum Account {
        Spot = <any>'spot',
        Margin = <any>'margin',
        CrossMargin = <any>'cross_margin',
    }
    export enum Side {
        Buy = <any>'buy',
        Sell = <any>'sell',
    }
    export enum TimeInForce {
        Gtc = <any>'gtc',
        Ioc = <any>'ioc',
        Poc = <any>'poc',
    }
}

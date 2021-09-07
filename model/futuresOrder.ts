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
 * Futures order details
 */
export class FuturesOrder {
    /**
     * Futures order ID
     */
    'id'?: number;
    /**
     * User ID
     */
    'user'?: number;
    /**
     * Creation time of order
     */
    'createTime'?: number;
    /**
     * Order finished time. Not returned if order is open
     */
    'finishTime'?: number;
    /**
     * How the order was finished.  - filled: all filled - cancelled: manually cancelled - liquidated: cancelled because of liquidation - ioc: time in force is `IOC`, finish immediately - auto_deleveraged: finished by ADL - reduce_only: cancelled because of increasing position while `reduce-only` set- position_closed: cancelled because of position close
     */
    'finishAs'?: FuturesOrder.FinishAs;
    /**
     * Order status  - `open`: waiting to be traded - `finished`: finished
     */
    'status'?: FuturesOrder.Status;
    /**
     * Futures contract
     */
    'contract': string;
    /**
     * Order size. Specify positive number to make a bid, and negative number to ask
     */
    'size': number;
    /**
     * Display size for iceberg order. 0 for non-iceberg. Note that you will have to pay the taker fee for the hidden size
     */
    'iceberg'?: number;
    /**
     * Order price. 0 for market order with `tif` set as `ioc`
     */
    'price'?: string;
    /**
     * Set as `true` to close the position, with `size` set to 0
     */
    'close'?: boolean;
    /**
     * Is the order to close position
     */
    'isClose'?: boolean;
    /**
     * Set as `true` to be reduce-only order
     */
    'reduceOnly'?: boolean;
    /**
     * Is the order reduce-only
     */
    'isReduceOnly'?: boolean;
    /**
     * Is the order for liquidation
     */
    'isLiq'?: boolean;
    /**
     * Time in force  - gtc: GoodTillCancelled - ioc: ImmediateOrCancelled, taker only - poc: PendingOrCancelled, reduce-only
     */
    'tif'?: FuturesOrder.Tif;
    /**
     * Size left to be traded
     */
    'left'?: number;
    /**
     * Fill price of the order
     */
    'fillPrice'?: string;
    /**
     * User defined information. If not empty, must follow the rules below:  1. prefixed with `t-` 2. no longer than 28 bytes without `t-` prefix 3. can only include 0-9, A-Z, a-z, underscore(_), hyphen(-) or dot(.) Besides user defined information, reserved contents are listed below, denoting how the order is created:  - web: from web - api: from API - app: from mobile phones - auto_deleveraging: from ADL - liquidation: from liquidation - insurance: from insurance
     */
    'text'?: string;
    /**
     * Taker fee
     */
    'tkfr'?: string;
    /**
     * Maker fee
     */
    'mkfr'?: string;
    /**
     * Reference user ID
     */
    'refu'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'number',
        },
        {
            name: 'user',
            baseName: 'user',
            type: 'number',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'number',
        },
        {
            name: 'finishTime',
            baseName: 'finish_time',
            type: 'number',
        },
        {
            name: 'finishAs',
            baseName: 'finish_as',
            type: 'FuturesOrder.FinishAs',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'FuturesOrder.Status',
        },
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'number',
        },
        {
            name: 'iceberg',
            baseName: 'iceberg',
            type: 'number',
        },
        {
            name: 'price',
            baseName: 'price',
            type: 'string',
        },
        {
            name: 'close',
            baseName: 'close',
            type: 'boolean',
        },
        {
            name: 'isClose',
            baseName: 'is_close',
            type: 'boolean',
        },
        {
            name: 'reduceOnly',
            baseName: 'reduce_only',
            type: 'boolean',
        },
        {
            name: 'isReduceOnly',
            baseName: 'is_reduce_only',
            type: 'boolean',
        },
        {
            name: 'isLiq',
            baseName: 'is_liq',
            type: 'boolean',
        },
        {
            name: 'tif',
            baseName: 'tif',
            type: 'FuturesOrder.Tif',
        },
        {
            name: 'left',
            baseName: 'left',
            type: 'number',
        },
        {
            name: 'fillPrice',
            baseName: 'fill_price',
            type: 'string',
        },
        {
            name: 'text',
            baseName: 'text',
            type: 'string',
        },
        {
            name: 'tkfr',
            baseName: 'tkfr',
            type: 'string',
        },
        {
            name: 'mkfr',
            baseName: 'mkfr',
            type: 'string',
        },
        {
            name: 'refu',
            baseName: 'refu',
            type: 'number',
        },
    ];

    static getAttributeTypeMap() {
        return FuturesOrder.attributeTypeMap;
    }
}

export namespace FuturesOrder {
    export enum FinishAs {
        Filled = <any>'filled',
        Cancelled = <any>'cancelled',
        Liquidated = <any>'liquidated',
        Ioc = <any>'ioc',
        AutoDeleveraged = <any>'auto_deleveraged',
        ReduceOnly = <any>'reduce_only',
        PositionClosed = <any>'position_closed',
        ReduceOut = <any>'reduce_out',
    }
    export enum Status {
        Open = <any>'open',
        Finished = <any>'finished',
    }
    export enum Tif {
        Gtc = <any>'gtc',
        Ioc = <any>'ioc',
        Poc = <any>'poc',
    }
}

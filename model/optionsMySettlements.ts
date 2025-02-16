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

export class OptionsMySettlements {
    /**
     * Settlement time
     */
    'time'?: number;
    /**
     * Underlying
     */
    'underlying'?: string;
    /**
     * Futures contract
     */
    'contract'?: string;
    /**
     * Strike price
     */
    'strikePrice'?: string;
    /**
     * settlement price
     */
    'settlePrice'?: string;
    /**
     * Size
     */
    'size'?: number;
    /**
     * Settlement profit
     */
    'settleProfit'?: string;
    /**
     * Fee
     */
    'fee'?: string;
    /**
     * The accumulated profit and loss of opening a position, including premium, fee, settlement profit, etc.
     */
    'realisedPnl'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'time',
            baseName: 'time',
            type: 'number',
        },
        {
            name: 'underlying',
            baseName: 'underlying',
            type: 'string',
        },
        {
            name: 'contract',
            baseName: 'contract',
            type: 'string',
        },
        {
            name: 'strikePrice',
            baseName: 'strike_price',
            type: 'string',
        },
        {
            name: 'settlePrice',
            baseName: 'settle_price',
            type: 'string',
        },
        {
            name: 'size',
            baseName: 'size',
            type: 'number',
        },
        {
            name: 'settleProfit',
            baseName: 'settle_profit',
            type: 'string',
        },
        {
            name: 'fee',
            baseName: 'fee',
            type: 'string',
        },
        {
            name: 'realisedPnl',
            baseName: 'realised_pnl',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return OptionsMySettlements.attributeTypeMap;
    }
}

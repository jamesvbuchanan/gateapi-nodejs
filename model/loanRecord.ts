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
 * Margin loaned record details
 */
export class LoanRecord {
    /**
     * Loan record ID
     */
    'id'?: string;
    /**
     * Loan ID the record belongs to
     */
    'loanId'?: string;
    /**
     * Loan time
     */
    'createTime'?: string;
    /**
     * Expiration time
     */
    'expireTime'?: string;
    /**
     * Loan record status
     */
    'status'?: LoanRecord.Status;
    /**
     * Garbled user ID
     */
    'borrowUserId'?: string;
    /**
     * Loan currency
     */
    'currency'?: string;
    /**
     * Loan rate
     */
    'rate'?: string;
    /**
     * Loan amount
     */
    'amount'?: string;
    /**
     * Loan days
     */
    'days'?: number;
    /**
     * Whether the record will auto renew on expiration
     */
    'autoRenew'?: boolean;
    /**
     * Repaid amount
     */
    'repaid'?: string;
    /**
     * Repaid interest
     */
    'paidInterest'?: string;
    /**
     * Outstanding interest yet to be paid
     */
    'unpaidInterest'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{ name: string; baseName: string; type: string }> = [
        {
            name: 'id',
            baseName: 'id',
            type: 'string',
        },
        {
            name: 'loanId',
            baseName: 'loan_id',
            type: 'string',
        },
        {
            name: 'createTime',
            baseName: 'create_time',
            type: 'string',
        },
        {
            name: 'expireTime',
            baseName: 'expire_time',
            type: 'string',
        },
        {
            name: 'status',
            baseName: 'status',
            type: 'LoanRecord.Status',
        },
        {
            name: 'borrowUserId',
            baseName: 'borrow_user_id',
            type: 'string',
        },
        {
            name: 'currency',
            baseName: 'currency',
            type: 'string',
        },
        {
            name: 'rate',
            baseName: 'rate',
            type: 'string',
        },
        {
            name: 'amount',
            baseName: 'amount',
            type: 'string',
        },
        {
            name: 'days',
            baseName: 'days',
            type: 'number',
        },
        {
            name: 'autoRenew',
            baseName: 'auto_renew',
            type: 'boolean',
        },
        {
            name: 'repaid',
            baseName: 'repaid',
            type: 'string',
        },
        {
            name: 'paidInterest',
            baseName: 'paid_interest',
            type: 'string',
        },
        {
            name: 'unpaidInterest',
            baseName: 'unpaid_interest',
            type: 'string',
        },
    ];

    static getAttributeTypeMap() {
        return LoanRecord.attributeTypeMap;
    }
}

export namespace LoanRecord {
    export enum Status {
        Loaned = <any>'loaned',
        Finished = <any>'finished',
    }
}

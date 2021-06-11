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

/* tslint:disable:no-unused-locals */
import { DepositAddress } from '../model/depositAddress';
import { LedgerRecord } from '../model/ledgerRecord';
import { SubAccountBalance } from '../model/subAccountBalance';
import { SubAccountTransfer } from '../model/subAccountTransfer';
import { TradeFee } from '../model/tradeFee';
import { Transfer } from '../model/transfer';
import { WithdrawStatus } from '../model/withdrawStatus';
import { ObjectSerializer } from '../model/models';
import { ApiClient } from './apiClient';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export class WalletApi {
    protected client: ApiClient;

    constructor(client?: ApiClient) {
        if (client) {
            this.client = client;
        } else {
            this.client = new ApiClient();
        }
    }

    /**
     *
     * @summary Generate currency deposit address
     * @param currency Currency name
     */
    public async getDepositAddress(currency: string): Promise<{ response: AxiosResponse; body: DepositAddress }> {
        const localVarPath = this.client.basePath + '/wallet/deposit_address';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'currency' is not null or undefined
        if (currency === null || currency === undefined) {
            throw new Error('Required parameter currency was null or undefined when calling getDepositAddress.');
        }

        localVarQueryParameters['currency'] = ObjectSerializer.serialize(currency, 'string');

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<DepositAddress>(config, 'DepositAddress', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Retrieve withdrawal records
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records returned in one list
     * @param opts.offset List offset, starting from 0
     */
    public async listWithdrawals(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<LedgerRecord> }> {
        const localVarPath = this.client.basePath + '/wallet/withdrawals';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<LedgerRecord>>(config, 'Array<LedgerRecord>', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days
     * @summary Retrieve deposit records
     * @param opts Optional parameters
     * @param opts.currency Filter by currency. Return all currency records if not specified
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records returned in one list
     * @param opts.offset List offset, starting from 0
     */
    public async listDeposits(opts: {
        currency?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<LedgerRecord> }> {
        const localVarPath = this.client.basePath + '/wallet/deposits';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<LedgerRecord>>(config, 'Array<LedgerRecord>', authSettings);
    }

    /**
     * Transfer between different accounts. Currently support transfers between the following:  1. spot - margin 2. spot - futures(perpetual) 3. spot - delivery 4. spot - cross margin
     * @summary Transfer between trading accounts
     * @param transfer
     */
    public async transfer(transfer: Transfer): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/wallet/transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'transfer' is not null or undefined
        if (transfer === null || transfer === undefined) {
            throw new Error('Required parameter transfer was null or undefined when calling transfer.');
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(transfer, 'Transfer'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     * Record time range cannot exceed 30 days  > Note: only records after 2020-04-10 can be retrieved
     * @summary Transfer records between main and sub accounts
     * @param opts Optional parameters
     * @param opts.subUid Sub account user ID. Return records related to all sub accounts if not specified
     * @param opts.from Time range beginning, default to 7 days before current time
     * @param opts.to Time range ending, default to current time
     * @param opts.limit Maximum number of records returned in one list
     * @param opts.offset List offset, starting from 0
     */
    public async listSubAccountTransfers(opts: {
        subUid?: string;
        from?: number;
        to?: number;
        limit?: number;
        offset?: number;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountTransfer> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        if (opts.from !== undefined) {
            localVarQueryParameters['from'] = ObjectSerializer.serialize(opts.from, 'number');
        }

        if (opts.to !== undefined) {
            localVarQueryParameters['to'] = ObjectSerializer.serialize(opts.to, 'number');
        }

        if (opts.limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(opts.limit, 'number');
        }

        if (opts.offset !== undefined) {
            localVarQueryParameters['offset'] = ObjectSerializer.serialize(opts.offset, 'number');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountTransfer>>(config, 'Array<SubAccountTransfer>', authSettings);
    }

    /**
     * Support transferring with sub user\'s spot or futures account. Note that only main user\'s spot account is used no matter which sub user\'s account is operated.
     * @summary Transfer between main and sub accounts
     * @param subAccountTransfer
     */
    public async transferWithSubAccount(
        subAccountTransfer: SubAccountTransfer,
    ): Promise<{ response: AxiosResponse; body?: any }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_transfers';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);

        // verify required parameter 'subAccountTransfer' is not null or undefined
        if (subAccountTransfer === null || subAccountTransfer === undefined) {
            throw new Error(
                'Required parameter subAccountTransfer was null or undefined when calling transferWithSubAccount.',
            );
        }

        const config: AxiosRequestConfig = {
            method: 'POST',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
            data: ObjectSerializer.serialize(subAccountTransfer, 'SubAccountTransfer'),
        };

        const authSettings = ['apiv4'];
        return this.client.request<any>(config, '', authSettings);
    }

    /**
     *
     * @summary Retrieve withdrawal status
     * @param opts Optional parameters
     * @param opts.currency Retrieved specified currency related data
     */
    public async listWithdrawStatus(opts: {
        currency?: string;
    }): Promise<{ response: AxiosResponse; body: Array<WithdrawStatus> }> {
        const localVarPath = this.client.basePath + '/wallet/withdraw_status';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.currency !== undefined) {
            localVarQueryParameters['currency'] = ObjectSerializer.serialize(opts.currency, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<WithdrawStatus>>(config, 'Array<WithdrawStatus>', authSettings);
    }

    /**
     *
     * @summary Retrieve sub account balances
     * @param opts Optional parameters
     * @param opts.subUid Sub account user ID. Return records related to all sub accounts if not specified
     */
    public async listSubAccountBalances(opts: {
        subUid?: string;
    }): Promise<{ response: AxiosResponse; body: Array<SubAccountBalance> }> {
        const localVarPath = this.client.basePath + '/wallet/sub_account_balances';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        opts = opts || {};
        if (opts.subUid !== undefined) {
            localVarQueryParameters['sub_uid'] = ObjectSerializer.serialize(opts.subUid, 'string');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<Array<SubAccountBalance>>(config, 'Array<SubAccountBalance>', authSettings);
    }

    /**
     *
     * @summary Retrieve personal trading fee
     */
    public async getTradeFee(): Promise<{ response: AxiosResponse; body: TradeFee }> {
        const localVarPath = this.client.basePath + '/wallet/fee';
        const localVarQueryParameters: any = {};
        const localVarHeaderParams: any = (<any>Object).assign({}, this.client.defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        const config: AxiosRequestConfig = {
            method: 'GET',
            params: localVarQueryParameters,
            headers: localVarHeaderParams,
            url: localVarPath,
        };

        const authSettings = ['apiv4'];
        return this.client.request<TradeFee>(config, 'TradeFee', authSettings);
    }
}

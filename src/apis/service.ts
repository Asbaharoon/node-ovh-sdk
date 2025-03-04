// GENERATED SDK for service API

import {Client} from '../client'
import QueryParams from '../query-params'

/**
 * Key and value, with proper key strings
 */
export interface ComplexTypeSafeKeyValue<T> {
  key: string
  value: T
}

/*
 * 
 */
export enum OrderCurrencyCode {
  AUD = 'AUD',
  CAD = 'CAD',
  CZK = 'CZK',
  EUR = 'EUR',
  GBP = 'GBP',
  LTL = 'LTL',
  MAD = 'MAD',
  N_A = 'N/A',
  PLN = 'PLN',
  SGD = 'SGD',
  TND = 'TND',
  USD = 'USD',
  XOF = 'XOF',
  POINTS = 'points'
}

/**
 * Price with it's currency and textual representation
 */
export interface OrderPrice {
  currencyCode: OrderCurrencyCode
  text: string
  value: any
}

/*
 * Possible billing states
 */
export enum ServiceBillingState {
  EXPIRED = 'expired',
  OK = 'ok',
  PENDING = 'pending',
  UNPAID = 'unpaid'
}

/**
 * List of consumptions recorded in a range
 */
export interface ServiceconsumptionTransaction {
  beginDate: string
  creationDate?: string
  elements: ServiceconsumptiontransactionElement[]
  endDate?: string
  id?: number
  lastUpdate?: string
  price: OrderPrice
  serviceId: number
}

/**
 * Element of consumption for resource
 */
export interface ServiceconsumptiontransactionElement {
  details: ServiceconsumptiontransactionelementDetail[]
  planCode: string
  price: OrderPrice
  quantity: number
}

/**
 * Element of consumption for resource
 */
export interface ServiceconsumptiontransactionelementDetail {
  quantity: number
  unique_id?: string
}

/**
 * Plan information
 */
export interface ServicePlan {
  code?: string
  product: ServiceplanProduct
}

/**
 * Product plan information
 */
export interface ServiceplanProduct {
  name?: string
}

/**
 * Renew information
 */
export interface ServiceRenew {
  dayOfMonth?: number
  interval?: ServicerenewInterval
  mode: ServicerenewMode
  possibleIntervals?: ServicerenewInterval[]
  possibleModes: ServicerenewMode[]
}

/*
 * Interval enum information
 */
export enum ServicerenewInterval {
  P1M = 'P1M',
  P1Y = 'P1Y',
  P2Y = 'P2Y',
  P3M = 'P3M',
  P3Y = 'P3Y',
  P6M = 'P6M'
}

/*
 * Mode enum informations
 */
export enum ServicerenewMode {
  AUTOMATICFORCEDPRODUCT = 'automaticForcedProduct',
  AUTOMATICV2012 = 'automaticV2012',
  AUTOMATICV2014 = 'automaticV2014',
  AUTOMATICV2016 = 'automaticV2016',
  DELETEATENDENGAGEMENT = 'deleteAtEndEngagement',
  DELETEATEXPIRATION = 'deleteAtExpiration',
  MANUAL = 'manual',
  ONESHOT = 'oneShot',
  OPTION = 'option'
}

/**
 * List possible renews for service
 */
export interface ServicerenewRenewDescription {
  renewPeriod: string
  strategies: ServicerenewRenewStrategy[]
}

/**
 * Representation of service's renew forecasting
 */
export interface ServicerenewRenewForecast {
  details: ServicerenewRenewForecastDetail[]
  prices: ServicerenewRenewForecastPrices
}

/**
 * Representation of a product renew pricing
 */
export interface ServicerenewRenewForecastDetail {
  description?: string
  quantity: number
  serviceName: string
  totalPrice: OrderPrice
  unitPrice: OrderPrice
}

/**
 * Prices for renew forecasting
 */
export interface ServicerenewRenewForecastPrices {
  tax: OrderPrice
  withoutTax: OrderPrice
  withTax: OrderPrice
}

/**
 * Details about a renew Order
 */
export interface ServicerenewRenewOrder {
  date?: string
  expirationDate?: string
  orderId: number
  password: string
  pdfUrl: string
  priceWithoutTax: OrderPrice
  priceWithTax: OrderPrice
  retractionDate?: string
  tax: OrderPrice
  url: string
}

/**
 * Representation of a product renew pricing
 */
export interface ServicerenewRenewStrategy {
  price: OrderPrice
  priceInUcents: number
  services: number[]
  servicesDetails: ServicerenewService[]
}

/**
 * Description of a service
 */
export interface ServicerenewService {
  serviceId: number
  serviceName: string
  serviceType: string
}

/**
 * Resource service informations
 */
export interface ServiceResource {
  displayName: string
  name?: string
  state?: ServiceResourceState
}

/*
 * Possible resource states
 */
export enum ServiceResourceState {
  DELETED = 'deleted',
  DELETING = 'deleting',
  OK = 'ok',
  OPENING = 'opening',
  SUSPENDED = 'suspended',
  SUSPENDING = 'suspending',
  TODELETE = 'toDelete',
  TOOPEN = 'toOpen',
  TOSUSPEND = 'toSuspend'
}

/**
 * route of this service
 */
export interface ServiceRoute {
  path?: string
  url?: string
  vars: any
}

/**
 * Details about a Service
 */
export interface ServiceListService {
  creationDate: string
  details: any
  engagementDate?: string
  expirationDate?: string
  nextBillingDate?: string
  plan: ServicePlan
  quantity: number
  renew?: ServiceRenew
  resource: ServiceResource
  route: ServiceRoute
  state: ServiceBillingState
}


export class Service {
  constructor(private client: Client) {}

  /**
   * Operations about the services [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service#GET)
   */
  ListAvailableServices(): Promise<number[]> {
    let url = `/service`

    return this.client.request<number[]>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D#GET)
   */
  GetThisObjectProperties(serviceId: number): Promise<ServiceListService> {
    let url = `/service/${serviceId}`

    return this.client.request<ServiceListService>('GET', url)
  }

  /**
   * Details about a Service [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D#PUT)
   */
  AlterThisObjectProperties(serviceId: number, payload: ServiceListService): Promise<void> {
    let url = `/service/${serviceId}`

    return this.client.request<void>('PUT', url, payload)
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/renew#GET)
   */
  ListPossibleRenewsForThisService(serviceId: string, includeOptions?: boolean): Promise<ServicerenewRenewDescription[]> {
    let url = `/service/${serviceId}/renew?`

    const queryParams = new QueryParams()
    if (includeOptions) { queryParams.set('includeOptions', includeOptions.toString()) }

    return this.client.request<ServicerenewRenewDescription[]>('GET', url+queryParams.toString())
  }

  /**
   * Missing description [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/renew#POST)
   */
  CreateARenewOrder(duration: string, serviceId: string, services: number[], dryRun?: boolean): Promise<ServicerenewRenewOrder> {
    let url = `/service/${serviceId}/renew`

    return this.client.request<ServicerenewRenewOrder>('POST', url, {duration, services, dryRun})
  }

  /**
   * reopen operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/reopen#POST)
   */
  ReopenASuspendedService(serviceId: number): Promise<void> {
    let url = `/service/${serviceId}/reopen`

    return this.client.request<void>('POST', url)
  }

  /**
   * suspend operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/suspend#POST)
   */
  SuspendTheServiceTheServiceWontBeAccessibleButYouWillStillBeChargedForIt(serviceId: number): Promise<void> {
    let url = `/service/${serviceId}/suspend`

    return this.client.request<void>('POST', url)
  }

  /**
   * terminate operations [BETA]
   * [See on api.ovh.com](https://eu.api.ovh.com/console/#/service/%7BserviceId%7D/terminate#POST)
   */
  TerminatesASuspendedService(serviceId: number): Promise<void> {
    let url = `/service/${serviceId}/terminate`

    return this.client.request<void>('POST', url)
  }

}

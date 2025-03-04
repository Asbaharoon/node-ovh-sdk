import { Client } from '../client';
export declare enum LicenseActionType {
    ADDWINDOWFROMEXISTINGSERIAL = "addWindowFromExistingSerial",
    CHANGEIP = "changeIp",
    CHANGEOS = "changeOs",
    INSTALLLICENSE = "installLicense",
    OPTIONUPGRADE = "optionUpgrade",
    RELEASEOPTION = "releaseOption",
    VERSIONUPGRADE = "versionUpgrade"
}
export declare enum LicenseLicenseTypeEnum {
    DEDICATED = "dedicated",
    DEDICATEDCLOUD = "dedicatedCloud",
    DEDICATEDFAILOVER = "dedicatedFailover",
    FAILOVER = "failover",
    VM = "vm",
    VPS = "vps",
    VPS_CEPH = "vps_ceph",
    VPS_CLASSIC = "vps_classic",
    VPS_CLOUD = "vps_cloud",
    VPS_CLOUD_2016 = "vps_cloud_2016",
    VPS_SSD = "vps_ssd"
}
export interface LicenseOption {
    canBeDeleted: boolean;
    version?: string;
    amount?: string;
    label: LicenseOptionLabel;
    expirationDate: string;
}
export declare enum LicenseOptionLabel {
    ANTISPAM_SPAMASSASSIN = "ANTISPAM_SPAMASSASSIN",
    ANTIVIRUS_DRWEB = "ANTIVIRUS_DRWEB",
    ANTIVIRUS_KASPERSKY = "ANTIVIRUS_KASPERSKY",
    DOMAINS = "DOMAINS",
    LANGUAGE_PACK = "LANGUAGE_PACK",
    POWERPACK = "POWERPACK",
    SQL_SERVER = "SQL_SERVER",
    VIRTUOZZO_CONTAINERS = "VIRTUOZZO_CONTAINERS"
}
export interface LicenseOrderableWindowsCompatibilityInfos {
    compliantSql: LicenseWindowsSqlVersionEnum[];
    version: LicenseWindowsOsVersionEnum;
}
export declare enum LicenseStateEnum {
    OK = "ok",
    RELEASED = "released",
    TERMINATED = "terminated",
    TODELIVER = "toDeliver"
}
export interface LicenseTask {
    lastUpdate: string;
    status: LicenseTaskStateEnum;
    todoDate: string;
    taskId: number;
    doneDate?: string;
    action: LicenseActionType;
    name: string;
}
export declare enum LicenseTaskStateEnum {
    CANCELLED = "cancelled",
    DOING = "doing",
    DONE = "done",
    ERROR = "error",
    TODO = "todo"
}
export interface LicensewindowsWindows {
    domain: string;
    licenseId: string;
    ip: string;
    version: LicenseWindowsOsVersionEnum;
    creation: string;
    status: LicenseStateEnum;
    deleteAtExpiration: boolean;
}
export interface LicenseWindowsOrderConfiguration {
    serviceType: LicenseLicenseTypeEnum;
    orderableVersions: LicenseOrderableWindowsCompatibilityInfos[];
}
export declare enum LicenseWindowsOsVersionEnum {
    WINDOWS_SERVER_2003_ENTERPRISE_EDITION = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2003_STANDARD_EDITION = "WINDOWS_SERVER_2003_STANDARD_EDITION",
    WINDOWS_SERVER_2003_WEB_EDITION = "WINDOWS_SERVER_2003_WEB_EDITION",
    WINDOWS_SERVER_2003_WEB_EDITION_2_CPU = "WINDOWS_SERVER_2003_WEB_EDITION_2_CPU",
    WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION = "WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION",
    WINDOWS_SERVER_2003_WEB_STANDARD_EDITION = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION",
    WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2008_DATACENTER_EDITION = "WINDOWS_SERVER_2008_DATACENTER_EDITION",
    WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU = "WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU",
    WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU = "WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU = "WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU",
    WINDOWS_SERVER_2008_STANDARD_EDITION = "WINDOWS_SERVER_2008_STANDARD_EDITION",
    WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU = "WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU",
    WINDOWS_SERVER_2008_WEB_EDITION = "WINDOWS_SERVER_2008_WEB_EDITION",
    WINDOWS_SERVER_2008_WEB_EDITION_2_CPU = "WINDOWS_SERVER_2008_WEB_EDITION_2_CPU",
    WINDOWS_SERVER_2008_WEB_EDITION_4_CPU = "WINDOWS_SERVER_2008_WEB_EDITION_4_CPU",
    WINDOWS_SERVER_2008_WEB_STANDARD_EDITION = "WINDOWS_SERVER_2008_WEB_STANDARD_EDITION",
    WINDOWS_SERVER_2012_DATACENTER_EDITION = "WINDOWS_SERVER_2012_DATACENTER_EDITION",
    WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU = "WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU",
    WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU = "WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU",
    WINDOWS_SERVER_2012_ENTERPRISE_EDITION = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION",
    WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU = "WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU",
    WINDOWS_SERVER_2012_STANDARD_EDITION = "WINDOWS_SERVER_2012_STANDARD_EDITION",
    WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU = "WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU",
    WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU = "WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU",
    WINDOWS_SERVER_2012_WEB_EDITION = "WINDOWS_SERVER_2012_WEB_EDITION",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES",
    WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES = "WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES",
    WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES = "WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES",
    WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES = "WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES",
    WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES = "WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_1_CPU = "windows-server-2008-license-datacenter-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_2_CPU = "windows-server-2008-license-datacenter-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_DATACENTER_EDITION_4_CPU = "windows-server-2008-license-datacenter-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_1_CPU = "windows-server-2008-license-enterprise-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_2_CPU = "windows-server-2008-license-enterprise-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_ENTERPRISE_EDITION_4_CPU = "windows-server-2008-license-enterprise-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_1_CPU = "windows-server-2008-license-standard-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_2_CPU = "windows-server-2008-license-standard-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_STANDARD_EDITION_4_CPU = "windows-server-2008-license-standard-edition-4-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_1_CPU = "windows-server-2008-license-web-edition-1-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_2_CPU = "windows-server-2008-license-web-edition-2-cpu",
    WINDOWS_SERVER_2008_LICENSE_WEB_EDITION_4_CPU = "windows-server-2008-license-web-edition-4-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_1_CPU = "windows-server-2012-license-datacenter-edition-1-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_2_CPU = "windows-server-2012-license-datacenter-edition-2-cpu",
    WINDOWS_SERVER_2012_LICENSE_DATACENTER_EDITION_4_CPU = "windows-server-2012-license-datacenter-edition-4-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_1_CPU = "windows-server-2012-license-standard-edition-1-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_2_CPU = "windows-server-2012-license-standard-edition-2-cpu",
    WINDOWS_SERVER_2012_LICENSE_STANDARD_EDITION_4_CPU = "windows-server-2012-license-standard-edition-4-cpu",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_1_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-1-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_2_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-2-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_10_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_12_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_14_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_16_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_18_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_20_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_22_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_24_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_DATACENTER_EDITION_4_CPU_8_CORES = "windows-server-2016-license-datacenter-edition-4-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_10_CORES = "windows-server-2016-license-standard-edition-1-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_12_CORES = "windows-server-2016-license-standard-edition-1-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_14_CORES = "windows-server-2016-license-standard-edition-1-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_16_CORES = "windows-server-2016-license-standard-edition-1-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_18_CORES = "windows-server-2016-license-standard-edition-1-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_20_CORES = "windows-server-2016-license-standard-edition-1-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_22_CORES = "windows-server-2016-license-standard-edition-1-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_24_CORES = "windows-server-2016-license-standard-edition-1-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_1_CPU_8_CORES = "windows-server-2016-license-standard-edition-1-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_10_CORES = "windows-server-2016-license-standard-edition-2-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_12_CORES = "windows-server-2016-license-standard-edition-2-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_14_CORES = "windows-server-2016-license-standard-edition-2-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_16_CORES = "windows-server-2016-license-standard-edition-2-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_18_CORES = "windows-server-2016-license-standard-edition-2-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_20_CORES = "windows-server-2016-license-standard-edition-2-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_22_CORES = "windows-server-2016-license-standard-edition-2-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_24_CORES = "windows-server-2016-license-standard-edition-2-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_2_CPU_8_CORES = "windows-server-2016-license-standard-edition-2-cpu-8-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_10_CORES = "windows-server-2016-license-standard-edition-4-cpu-10-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_12_CORES = "windows-server-2016-license-standard-edition-4-cpu-12-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_14_CORES = "windows-server-2016-license-standard-edition-4-cpu-14-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_16_CORES = "windows-server-2016-license-standard-edition-4-cpu-16-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_18_CORES = "windows-server-2016-license-standard-edition-4-cpu-18-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_20_CORES = "windows-server-2016-license-standard-edition-4-cpu-20-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_22_CORES = "windows-server-2016-license-standard-edition-4-cpu-22-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_24_CORES = "windows-server-2016-license-standard-edition-4-cpu-24-cores",
    WINDOWS_SERVER_2016_LICENSE_STANDARD_EDITION_4_CPU_8_CORES = "windows-server-2016-license-standard-edition-4-cpu-8-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_10_CORES = "windows-server-2019-license-datacenter-edition-10-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_12_CORES = "windows-server-2019-license-datacenter-edition-12-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_14_CORES = "windows-server-2019-license-datacenter-edition-14-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_16_CORES = "windows-server-2019-license-datacenter-edition-16-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_18_CORES = "windows-server-2019-license-datacenter-edition-18-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_20_CORES = "windows-server-2019-license-datacenter-edition-20-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_22_CORES = "windows-server-2019-license-datacenter-edition-22-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_24_CORES = "windows-server-2019-license-datacenter-edition-24-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_26_CORES = "windows-server-2019-license-datacenter-edition-26-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_28_CORES = "windows-server-2019-license-datacenter-edition-28-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_30_CORES = "windows-server-2019-license-datacenter-edition-30-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_32_CORES = "windows-server-2019-license-datacenter-edition-32-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_34_CORES = "windows-server-2019-license-datacenter-edition-34-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_36_CORES = "windows-server-2019-license-datacenter-edition-36-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_38_CORES = "windows-server-2019-license-datacenter-edition-38-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_40_CORES = "windows-server-2019-license-datacenter-edition-40-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_42_CORES = "windows-server-2019-license-datacenter-edition-42-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_44_CORES = "windows-server-2019-license-datacenter-edition-44-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_46_CORES = "windows-server-2019-license-datacenter-edition-46-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_48_CORES = "windows-server-2019-license-datacenter-edition-48-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_50_CORES = "windows-server-2019-license-datacenter-edition-50-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_52_CORES = "windows-server-2019-license-datacenter-edition-52-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_54_CORES = "windows-server-2019-license-datacenter-edition-54-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_56_CORES = "windows-server-2019-license-datacenter-edition-56-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_58_CORES = "windows-server-2019-license-datacenter-edition-58-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_60_CORES = "windows-server-2019-license-datacenter-edition-60-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_62_CORES = "windows-server-2019-license-datacenter-edition-62-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_64_CORES = "windows-server-2019-license-datacenter-edition-64-cores",
    WINDOWS_SERVER_2019_LICENSE_DATACENTER_EDITION_8_CORES = "windows-server-2019-license-datacenter-edition-8-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_10_CORES = "windows-server-2019-license-standard-edition-10-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_12_CORES = "windows-server-2019-license-standard-edition-12-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_14_CORES = "windows-server-2019-license-standard-edition-14-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_16_CORES = "windows-server-2019-license-standard-edition-16-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_18_CORES = "windows-server-2019-license-standard-edition-18-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_20_CORES = "windows-server-2019-license-standard-edition-20-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_22_CORES = "windows-server-2019-license-standard-edition-22-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_24_CORES = "windows-server-2019-license-standard-edition-24-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_26_CORES = "windows-server-2019-license-standard-edition-26-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_28_CORES = "windows-server-2019-license-standard-edition-28-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_30_CORES = "windows-server-2019-license-standard-edition-30-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_32_CORES = "windows-server-2019-license-standard-edition-32-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_34_CORES = "windows-server-2019-license-standard-edition-34-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_36_CORES = "windows-server-2019-license-standard-edition-36-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_38_CORES = "windows-server-2019-license-standard-edition-38-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_40_CORES = "windows-server-2019-license-standard-edition-40-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_42_CORES = "windows-server-2019-license-standard-edition-42-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_44_CORES = "windows-server-2019-license-standard-edition-44-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_46_CORES = "windows-server-2019-license-standard-edition-46-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_48_CORES = "windows-server-2019-license-standard-edition-48-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_50_CORES = "windows-server-2019-license-standard-edition-50-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_52_CORES = "windows-server-2019-license-standard-edition-52-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_54_CORES = "windows-server-2019-license-standard-edition-54-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_56_CORES = "windows-server-2019-license-standard-edition-56-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_58_CORES = "windows-server-2019-license-standard-edition-58-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_60_CORES = "windows-server-2019-license-standard-edition-60-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_62_CORES = "windows-server-2019-license-standard-edition-62-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_64_CORES = "windows-server-2019-license-standard-edition-64-cores",
    WINDOWS_SERVER_2019_LICENSE_STANDARD_EDITION_8_CORES = "windows-server-2019-license-standard-edition-8-cores"
}
export declare enum LicenseWindowsSqlVersionEnum {
    SQL_SERVER_2008_STANDARD_EDITION = "SQL_SERVER_2008_STANDARD_EDITION",
    SQL_SERVER_2008_STANDARD_EDITION_2_CPU = "SQL_SERVER_2008_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2008_WEB_EDITION = "SQL_SERVER_2008_WEB_EDITION",
    SQL_SERVER_2008_WEB_EDITION_2_CPU = "SQL_SERVER_2008_WEB_EDITION_2_CPU",
    SQL_SERVER_2012_STANDARD_EDITION = "SQL_SERVER_2012_STANDARD_EDITION",
    SQL_SERVER_2012_STANDARD_EDITION_12_CORES = "SQL_SERVER_2012_STANDARD_EDITION_12_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_16_CORES = "SQL_SERVER_2012_STANDARD_EDITION_16_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_18_CORES = "SQL_SERVER_2012_STANDARD_EDITION_18_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_20_CORES = "SQL_SERVER_2012_STANDARD_EDITION_20_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_24_CORES = "SQL_SERVER_2012_STANDARD_EDITION_24_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_2_CPU = "SQL_SERVER_2012_STANDARD_EDITION_2_CPU",
    SQL_SERVER_2012_STANDARD_EDITION_32_CORES = "SQL_SERVER_2012_STANDARD_EDITION_32_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_4_CORES = "SQL_SERVER_2012_STANDARD_EDITION_4_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_6_CORES = "SQL_SERVER_2012_STANDARD_EDITION_6_CORES",
    SQL_SERVER_2012_STANDARD_EDITION_8_CORES = "SQL_SERVER_2012_STANDARD_EDITION_8_CORES",
    SQL_SERVER_2012_WEB_EDITION_12_CORES = "SQL_SERVER_2012_WEB_EDITION_12_CORES",
    SQL_SERVER_2012_WEB_EDITION_16_CORES = "SQL_SERVER_2012_WEB_EDITION_16_CORES",
    SQL_SERVER_2012_WEB_EDITION_18_CORES = "SQL_SERVER_2012_WEB_EDITION_18_CORES",
    SQL_SERVER_2012_WEB_EDITION_20_CORES = "SQL_SERVER_2012_WEB_EDITION_20_CORES",
    SQL_SERVER_2012_WEB_EDITION_24_CORES = "SQL_SERVER_2012_WEB_EDITION_24_CORES",
    SQL_SERVER_2012_WEB_EDITION_32_CORES = "SQL_SERVER_2012_WEB_EDITION_32_CORES",
    SQL_SERVER_2012_WEB_EDITION_4_CORES = "SQL_SERVER_2012_WEB_EDITION_4_CORES",
    SQL_SERVER_2012_WEB_EDITION_6_CORES = "SQL_SERVER_2012_WEB_EDITION_6_CORES",
    SQL_SERVER_2012_WEB_EDITION_8_CORES = "SQL_SERVER_2012_WEB_EDITION_8_CORES"
}
export declare enum ServiceRenewalTypeEnum {
    AUTOMATICFORCEDPRODUCT = "automaticForcedProduct",
    AUTOMATICV2012 = "automaticV2012",
    AUTOMATICV2014 = "automaticV2014",
    AUTOMATICV2016 = "automaticV2016",
    MANUAL = "manual",
    ONESHOT = "oneShot",
    OPTION = "option"
}
export interface ServiceRenewType {
    forced: boolean;
    automatic: boolean;
    period?: number;
    manualPayment?: boolean;
    deleteAtExpiration: boolean;
}
export declare enum ServiceStateEnum {
    EXPIRED = "expired",
    INCREATION = "inCreation",
    OK = "ok",
    PENDINGDEBT = "pendingDebt",
    UNPAID = "unPaid"
}
export declare enum ServiceTerminationFutureUseEnum {
    NOT_REPLACING_SERVICE = "NOT_REPLACING_SERVICE",
    OTHER = "OTHER",
    SUBSCRIBE_AN_OTHER_SERVICE = "SUBSCRIBE_AN_OTHER_SERVICE",
    SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_OTHER_KIND_OF_SERVICE_WITH_COMPETITOR",
    SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR = "SUBSCRIBE_SIMILAR_SERVICE_WITH_COMPETITOR"
}
export declare enum ServiceTerminationReasonEnum {
    FEATURES_DONT_SUIT_ME = "FEATURES_DONT_SUIT_ME",
    LACK_OF_PERFORMANCES = "LACK_OF_PERFORMANCES",
    MIGRATED_TO_ANOTHER_OVH_PRODUCT = "MIGRATED_TO_ANOTHER_OVH_PRODUCT",
    MIGRATED_TO_COMPETITOR = "MIGRATED_TO_COMPETITOR",
    NOT_ENOUGH_RECOGNITION = "NOT_ENOUGH_RECOGNITION",
    NOT_NEEDED_ANYMORE = "NOT_NEEDED_ANYMORE",
    NOT_RELIABLE = "NOT_RELIABLE",
    NO_ANSWER = "NO_ANSWER",
    OTHER = "OTHER",
    PRODUCT_DIMENSION_DONT_SUIT_ME = "PRODUCT_DIMENSION_DONT_SUIT_ME",
    PRODUCT_TOOLS_DONT_SUIT_ME = "PRODUCT_TOOLS_DONT_SUIT_ME",
    TOO_EXPENSIVE = "TOO_EXPENSIVE",
    TOO_HARD_TO_USE = "TOO_HARD_TO_USE",
    UNSATIFIED_BY_CUSTOMER_SUPPORT = "UNSATIFIED_BY_CUSTOMER_SUPPORT"
}
export interface ServicesService {
    contactTech: string;
    contactAdmin: string;
    renewalType: ServiceRenewalTypeEnum;
    engagedUpTo?: string;
    creation: string;
    possibleRenewPeriod?: number[];
    status: ServiceStateEnum;
    renew?: ServiceRenewType;
    expiration: string;
    domain: string;
    serviceId: number;
    contactBilling: string;
    canDeleteAtExpiration: boolean;
}
export declare class LicenseWindows {
    private client;
    constructor(client: Client);
    ListAvailableServices(): Promise<string[]>;
    GetThisObjectProperties(serviceName: string): Promise<LicensewindowsWindows>;
    AlterThisObjectProperties(serviceName: string, payload: LicensewindowsWindows): Promise<void>;
    ConfirmTerminationOfYourService(serviceName: string, token: string, commentary?: string, futureUse?: ServiceTerminationFutureUseEnum, reason?: ServiceTerminationReasonEnum): Promise<string>;
    OptionsAttachedToThisLicense(serviceName: string): Promise<LicenseOptionLabel[]>;
    ReleaseThisOption(label: LicenseOptionLabel, serviceName: string): Promise<LicenseTask>;
    LinkYourOwnSqlServerLicenseToThisWindowsLicense(licenseId: string, serviceName: string, version: LicenseWindowsSqlVersionEnum): Promise<LicenseTask>;
    TasksLinkedToThisLicense(serviceName: string, action?: LicenseActionType, status?: LicenseTaskStateEnum): Promise<number[]>;
    TerminateYourService(serviceName: string): Promise<string>;
    GetTheOrderableWindowsVersions(ip: string): Promise<LicenseWindowsOrderConfiguration[]>;
}
//# sourceMappingURL=license.windows.d.ts.map
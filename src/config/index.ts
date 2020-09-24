import merge from 'lodash/merge';
import registry from 'assets/generated/pm/registry.homestead.json';
import registryKovan from 'assets/generated/pm/registry.kovan.json';
import registryRopsten from '@/config/registry.ropsten.json';
import homestead from '@/config/homestead.json';
import staging from '@/config/homestead.staging.json';
import kovan from '@/config/kovan.json';
import ropsten from '@/config/ropsten.json';
import {clone} from '@/helpers/utils';

const configs = {
    production: {homestead, kovan, ropsten},
    staging: {homestead: merge(clone(homestead), staging), kovan, ropsten}
};
configs.production.homestead = merge(registry, configs.production.homestead);
configs.production.kovan = merge(registryKovan, configs.production.kovan);
configs.production.ropsten = merge(registryRopsten, configs.production.ropsten);

configs.staging.homestead = merge(registry, configs.staging.homestead);
configs.staging.kovan = merge(registryKovan, configs.staging.kovan);
configs.staging.ropsten = merge(registryRopsten, configs.staging.ropsten);

const env = process.env.VUE_APP_ENV || 'production';
const network = process.env.VUE_APP_NETWORK || 'homestead';

export default configs[env][network];

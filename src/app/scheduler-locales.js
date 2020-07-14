import EnLocale from 'bryntum-scheduler/locales/scheduler.locale.En.js';
import FrLocale from 'bryntum-scheduler/locales/scheduler.locale.Fr.js';
import { LocaleManager } from 'bryntum-scheduler';

LocaleManager.registerLocale('En', { locale: EnLocale });
LocaleManager.registerLocale('Fr', { locale: FrLocale });

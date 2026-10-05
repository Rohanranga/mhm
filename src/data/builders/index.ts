import { BuilderData } from '@/types/builder';
import { myHomeGroupData } from './my-home-group';
import { vasaviGroupData } from './vasavi-group';
import { aparnaConstructionsData } from './aparna-constructions';
import { rajapushpaPropertiesData } from './rajapushpa-properties';
import { ramkyEstatesData } from './ramky-estates';
import { asblData } from './asbl';
import { jayabheriPropertiesData } from './jayabheri-properties';
import { honerHomesData } from './honer-homes';
import { cybercityBuildersData } from './cybercity-builders';
import { prestigeHyderabadData } from './prestige-hyderabad';

export const buildersRegistry: Record<string, BuilderData> = {
  'my-home-group': myHomeGroupData,
  'vasavi-group': vasaviGroupData,
  'aparna-constructions': aparnaConstructionsData,
  'rajapushpa-properties': rajapushpaPropertiesData,
  'ramky-estates': ramkyEstatesData,
  'asbl': asblData,
  'jayabheri-properties': jayabheriPropertiesData,
  'honer-homes': honerHomesData,
  'cybercity-builders': cybercityBuildersData,
  'prestige-hyderabad': prestigeHyderabadData,
};

export const buildersList = Object.values(buildersRegistry);

export const defaultBuilder = myHomeGroupData;

export function getBuilderById(id: string): BuilderData {
  return buildersRegistry[id] || defaultBuilder;
}

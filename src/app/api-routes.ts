import { environment } from '../environments/environment';

export class ApiRoute {
    private static readonly BaseUrl = `${environment.apiAdministrationHost}`;

    public static readonly COMMUNES = {
        getCommunes: () => `${ApiRoute.BaseUrl}/communes`,
        getCommune: (code: string) => `${ApiRoute.BaseUrl}/communes/${code}`
    }

    public static readonly DEPARTEMENTS = {
        getDepartements: () => `${ApiRoute.BaseUrl}/departements`,
        getDepartement: (code: string) => `${ApiRoute.BaseUrl}/departements/${code}`,
        getCommunesOfDepartement: (code: string) => `${ApiRoute.BaseUrl}/departements/${code}/communes`
    }

    public static readonly REGIONS = {
        getRegions: () => `${ApiRoute.BaseUrl}/regions`,
        getRegion: (code: string) => `${ApiRoute.BaseUrl}/regions/${code}`,
        getDepartementsOfRegion: (code: string) => `${ApiRoute.BaseUrl}/regions/${code}/departements`
    }
}
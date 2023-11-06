import { Marantable123Base} from '@baseapp/marantable123/marantable123/marantable123.base.model';

export class Marantable123ApiConstants {
    public static readonly delete: any = {
        url: '/rest/marantable123s/{ids}',
        method: 'DELETE',
        showloading: true
    };
    public static readonly autoSuggestService: any = {
        url: '/rest/marantable123s/autosuggest',
        method: 'GET',
        showloading: true
    };
    public static readonly update: any = {
        url: '/rest/marantable123s/',
        method: 'PUT',
        showloading: true
    };
    public static readonly getDatatableData: any = {
        url: '/rest/marantable123s/datatable',
        method: 'POST',
        showloading: true
    };
    public static readonly getById: any = {
        url: '/rest/marantable123s/{sid}',
        method: 'GET',
        showloading: true
    };
    public static readonly create: any = {
        url: '/rest/marantable123s/',
        method: 'POST',
        showloading: true
    };
}
import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,

} from 'n8n-workflow';

export class NasaPicsApi implements ICredentialType {
	name = 'nasaPicsApi';
	displayName = 'NASA Pics API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'http://Users/Nizar/.n8n/node_modules/n8n-cloudshift2';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	} as IAuthenticateGeneric;
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AppConfig {
  static settings: IAppConfigSettings;

  constructor(private readonly httpClient: HttpClient) {}

  load(): Promise<IAppConfigSettings> {
    const jsonFile = `assets/config/config.${environment.name}.json`;
    return new Promise<IAppConfigSettings>((resolve, reject) => {
      this.httpClient.get<IAppConfigSettings>(jsonFile).subscribe(
              (settings) => {
                AppConfig.settings = settings;
                if (environment.name === settings.environmentName) {
                  resolve(AppConfig.settings);
                } else {
                  console.log(`${environment.name} neq ${settings.environmentName}`);
                  reject(AppConfig.settings);
                }
              },
              (error) => {
                if (!environment.production) {
                  console.error(
                          `Failed to load environment settings for ${environment.name}`
                          );
                }
                reject(error);
              }
              );
    });
  }
}

export interface IAppConfigSettings {
  useStub: boolean;
  environmentName: string;
  endPointApiUrl: string;

}
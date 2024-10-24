import { Injectable } from '@angular/core';
import { GitHubProject } from '../interfaces/project-interface';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { ContactElement } from '../interfaces/contact-element.interface';

@Injectable({ providedIn: 'root' })
export class CurriculumService {
  private baseUrl: string = `https://api.github.com/users/VidalMiquel/starred`;

  constructor(private http: HttpClient) {}

  public contactComponent: ContactElement[] = [
    {
      redirectName: 'https://github.com/VidalMiquel',
      name: 'github',
      html:'fab fa-github'
    },
    {
      redirectName: 'https://www.linkedin.com/in/mvc4',
      name: 'linkedin',
      html:'fab fa-linkedin'
    },
    {
      redirectName: 'mailto:miquelvidalcortes@gmail.com',
      name: 'mail',
      html:'fas fa-envelope'
    },
    {
      redirectName: 'tel:+630232894',
      name: 'phone',
      html:'fas fa-phone'
    },
    {
      redirectName: 'assets/cvMiquelVidal.pdf',
      name: 'resume',
      html:'fas fa-file'
    }
  ];

  getContactComponent(): ContactElement[] {
    return this.contactComponent;
  }

  getProjectsHttpRequest(): Observable<GitHubProject[] | undefined> {
    return this.http.get<GitHubProject[]>(this.baseUrl).pipe(
      tap((projects) => {

      }),
      catchError((error) => {
        console.error('Error fetching projects:', error);
        return of(undefined);
      })
    );
  }
}

import { PipeTransform, Pipe } from '@angular/core';
import { IdeasService } from '../_service/ideas.service';

@Pipe({
    name: 'ideasFilter2'
})
export class IdeaFilter2 implements PipeTransform {
    transform(ideas: any[], searchTerm: string): any[] {
        if (!ideas || !searchTerm) {
            return ideas;
        }
        return ideas.filter(ideas => ideas.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

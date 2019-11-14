import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'ideasFilter'
})

export class IdeaFilter implements PipeTransform {
    transform(ideas: any[], searchTerm: string) {
        if (!ideas || !searchTerm) {
            return ideas;
        }
        return ideas.filter(ideas => ideas.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}

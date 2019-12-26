import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toTitle'
})
export class titlePipe implements PipeTransform {
    transform(value: string) {
        if(!value)   return null;
        let words = value.toLowerCase().split(" ");
        words.forEach((w,index)=>{
            if(index == 0 || !this.isPreposition(w)){
                words[index] = this.toTitleCase(w);
            }
        });
        return words.join(' ');
    }

    private isPreposition(word:string):boolean{
        let prepositions = ["the", "of", "at"];
        return prepositions.includes(word);
    }

    private toTitleCase(word:string):string{
        return word.replace(/^\w/, function (chr) {
            return chr.toUpperCase()
        });
    }
    
}
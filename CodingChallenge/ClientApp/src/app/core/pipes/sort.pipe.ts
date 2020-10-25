import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {
    transform(inputArray: any, column: string, sortDirection: string): any {
        if (inputArray && sortDirection === 'asc') {
            return inputArray.sort((a, b) =>
                a[column] > b[column] ? 1 : b[column] > a[column] ? -1 : 0
            );
        }else if (inputArray && sortDirection === 'desc') {
            return inputArray.sort((a, b) =>
                a[column] < b[column] ? 1 : b[column] < a[column] ? -1 : 0
            );
        }
        return inputArray;
    }
}
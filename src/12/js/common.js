if (!String.prototype.padStart) {
    String.prototype.padStart=function( len, str ){
        const _this=this;
        let newString;
        let newArray=_this.split('');
        const oldLength=_this.length;
        if ( len>oldLength ) {
            const childStringLen=str.length;
            const newLength=len-oldLength;
            const m=Math.floor(newLength/childStringLen);
            const n=newLength%childStringLen;

            newArray.unshift( str.substr(0,n) );
    
            for ( let i=0; i<m; i++ ) {
                newArray.unshift(str);
            }
            newString=newArray.join('');              
        } else if( len<=oldLength||!str ) {
            newString=str;
        }
        return newString;
    };
}
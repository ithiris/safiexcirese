function zeroFill(nValue){

    {
        if ( nValue < 10 )
        {
            return ( '000' + nValue.toString () );
        }
        else if ( nValue < 100 )
        {
            return ( '00' + nValue.toString () );
        }
        else if ( nValue < 1000 )
        {
            return ( '0' + nValue.toString () );
        }
        else
        {
            return ( nValue );
        }
    }

}


console.log(zeroFill(120,5,"+"));
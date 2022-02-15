import React from 'react';
import AdminLayout from '../../components/adminLayout';
import StyledContainer from '../../styledComponents/styledContainer';

function Index(props) {
 
    return (
        <StyledContainer>

        </StyledContainer>
    );
}


Index.getLayout = function getLayout(Index) {
    return (
      <AdminLayout>
        {Index}
      </AdminLayout>
    )
  }

export default Index;
import React from 'react'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'

export default class Music extends React.Component
{
      render()
      {
          return(
              <Layout>
                <PageHeader></PageHeader>
                <div>Music</div>
            </Layout>
          )
      }
}
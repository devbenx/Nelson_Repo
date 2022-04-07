// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Root as IGetProductResponse } from '../../../../types/csproduct'
import cors from 'cors';
import axios from 'axios'

type Data = {
      api_response: any
}

const getData = async (url: string) => {
      return await axios.get(url)
            .then(response => {
                  // console.log(response.data)
                  return response.data
            })
            .catch(err => err);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

      const { product_id } = req.query

      const url: string = `http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_${product_id}.json`

      console.log('API Cross Selling product loading...');
      const response = await getData(url);
      response != undefined ? console.log(`API Cross Selling product status: SUCCES`) : console.log(`API Cross Selling product status: FAILED`);

      res.status(200).json(response)
}

// Deafult Next Function
async function handlerWithFetch(req: NextApiRequest, res: NextApiResponse<Data>) {
      const { product_id } = req.query

      const request = await fetch(`http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_${product_id}.json`)

      const response: IGetProductResponse = await request.json()

      res.status(200).json({ api_response: response })
}

// XHR
const getXHRData = async (url: string) => {
      //Promise resolve - reject structure ?
      var XMLHttpRequest = require('xhr2'); //XHR new version
      console.log('XMLHttpRequest started...')
      const xhttp = new XMLHttpRequest();

      xhttp.responseType = 'json';

      xhttp.onreadystatechange = function logger() {
            if (this.readyState === 4 && this.status === 200) {
                  // console.log(this);
                  console.log(this.response);
                  return this.response
            }
      };

      xhttp.open('GET', url, true);
      xhttp.send();
      return xhttp.response

};
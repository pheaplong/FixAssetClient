import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { rejects } from 'assert';

const apiUrl = 'http://localhost:8080/api';
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Authorization', `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxOTAwMzk1IiwidXNlck5hbWUiOiJQaGVhcCBMb25nIiwiaWF0IjoxNjI4MDUwNjI4LCJleHAiOjE2NTk1ODY2Mjh9.ZWBvumX1ALOei4Vv441mfL8UhoO7lhiOv0p06Jl85EY`);
    return fetchUtils.fetchJson(url, options);
};
export default ({ priKey, route }) => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${route}?${stringify(query)}`;
    return httpClient(url)
      .then(({ headers, json }) => {
        return {
          data: json.map((t) => ({ ...t, id: t[priKey] })),
          total: json.length
        };
      })
      .catch((e) => Promise.reject(e));
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}`)
      .then(({ json }) => ({
        data: { ...json, id: json[priKey] },
      }))
      .catch((e) => Promise.reject(e)),

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const url = `${apiUrl}/${route}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => {
      return {
        data: json.map((t) => ({ ...t, id: t[priKey] })),
      };
    });
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    // const query = {
    //   sort: JSON.stringify([field, order]),
    //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //   filter: JSON.stringify({
    //     ...params.filter,
    //     [params.target]: params.id,
    //   }),
    // };
		const query=`${params.target}=${params.id}`
    const url = `${apiUrl}/${route}?${query}`;

    return httpClient(url)
      .then(({ headers, json }) => {
        return {
          data: json.map((t) => ({ ...t, id: t[priKey] })),
          total: json.length
        };
      })
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: { id: 0 } })),

  //  updateMany: (resource, params) => {
  //      const query = {
  //          filter: JSON.stringify({ id: params.ids}),
  //      };
  //      return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //          method: 'PUT',
  //          body: JSON.stringify(params.data),
  //      }).then(({ json }) => ({ data: json }));
  //  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${route}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({
      data: { ...params.data, id: json },
    })),

  delete: (resource, params) => {
    return httpClient(`${apiUrl}/${route}/${params.id}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },

  deleteMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    return httpClient(`${apiUrl}/${route}?${stringify(query)}`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
  //#region Asset
  approveAsset: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}/approval`, {
      method: "PUT",
    }).then(({ json }) => ({ data: json })),
  rejectAsset: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}/approval`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),
  //#endregion

  getDataLookUpList: (resource, params) =>
    httpClient(`${apiUrl}/DataLookUps/${resource}`)
	.then(({ headers, json }) => {
      return {
        data: json.map((t) => ({ ...t, id: t.lookupId })),
        total: json.length
      };
    }),

  //#region Asset Transaction
  approveAssetTrn: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}/approval`, {
      method: "PUT",
    }).then(({ json }) => ({ data: json })),
  rejectAssetTrn: (resource, params) =>
    httpClient(`${apiUrl}/${route}/${params.id}/approval`, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json })),
  //#endregion
});
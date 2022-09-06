Limitation with Contentful & GraphQL: https://www.contentful.com/developers/docs/references/graphql/#/introduction/query-complexity-limits

Comparison of REST & GraphQL using Contentful.

## Getting Started

1. Install packages with "npm install"
1. Move empty environment variables from .env.example to .env
2. Fill the empty environment variable with the values from contentful
3. Run the development server:

```bash
npm install

cp .env.example .env

npm run dev # will also generate types from
```

Open [http://localhost:3000/graphql](http://localhost:3000/graphql) for GraphQL version.

Open [http://localhost:3000/rest](http://localhost:3000/rest) for REST version.

REST page code in: pages/rest

GraphQL page code in: pages/graphql

<br/>

## GraphQL vs REST - JSON Response

Comparison below on how much GraphQL returns data in comparison to REST.

<br/>

### GraphQL - blogCollection Response

```bash
{
  "data": {
    "blogCollection": {
      "items": [
        {
          "title": "Why it's called Football and not Soccer.",
          "slug": "why-its-called-football-and-not-soccer",
          "test": 100,
          "thumbnail": {
            "title": "Why it's called football and not soccer.",
            "url": "https://images.ctfassets.net/nyb9we33lqco/2Pl6OSE3qjBFJRTy4sxgWA/1e3662e6103f464cc65f1eaafbe0fcc0/football.jpg",
            "description": ""
          },
          "author": {
            "name": "Sam Smith",
            "email": "sam@gmail.com",
            "profileImage": {
              "title": "headshot4",
              "url": "https://images.ctfassets.net/nyb9we33lqco/2g0l3CCy9ezAIeIlUt5YNm/af38324cda4db1d2f39030e3c37b9db0/headshot4.jpeg",
              "description": null
            },
            "sys": { "id": "5N5ShJ1cGVqjMh9zB0i4QD" }
          },
          "sys": { "id": "1mdvXZuj5eWZZHGFeUftvb" }
        },
        {
          "title": "Painting is the art of applying paint.",
          "slug": "painting-is-the-art-of-applying-paint",
          "test": null,
          "thumbnail": {
            "title": "painting",
            "url": "https://images.ctfassets.net/nyb9we33lqco/66hxiXacRk2jUGZnoqUUGI/6bf7899d975d0cb0793d87021fbf66a7/painting.jpg",
            "description": null
          },
          "author": {
            "name": "Julia Doe",
            "email": "julia@gmail.com",
            "profileImage": {
              "title": "headshot2",
              "url": "https://images.ctfassets.net/nyb9we33lqco/kSL5uJtpVkx0l8M4bGyk6/aa1999f2b001ade903a857d5b0818c12/headshot2.webp",
              "description": null
            },
            "sys": { "id": "1chhDuocF61FGdaEG2Dl7m" }
          },
          "sys": { "id": "C5jHaNi9yiciqljkiz05z" }
        },
        {
          "title": "Is Esport really a sport?",
          "slug": "is-esport-really-a-sport",
          "test": null,
          "thumbnail": {
            "title": "esports",
            "url": "https://images.ctfassets.net/nyb9we33lqco/4N5EsEkOBI1w2euL9FSu43/dc07b1b5bdbfd3f2983223608243d76f/esports.jpg",
            "description": null
          },
          "author": {
            "name": "Sam Smith",
            "email": "sam@gmail.com",
            "profileImage": {
              "title": "headshot4",
              "url": "https://images.ctfassets.net/nyb9we33lqco/2g0l3CCy9ezAIeIlUt5YNm/af38324cda4db1d2f39030e3c37b9db0/headshot4.jpeg",
              "description": null
            },
            "sys": { "id": "5N5ShJ1cGVqjMh9zB0i4QD" }
          },
          "sys": { "id": "31P2EgoXs9R2e466Fl1Cev" }
        },
        {
          "title": "Skating like Tony Hawk.",
          "slug": "skating-like-tony-hawk",
          "test": null,
          "thumbnail": {
            "title": "skating",
            "url": "https://images.ctfassets.net/nyb9we33lqco/2pgx8GwCbHOGSHY8gar4nS/dc5f1a76e0eee0238a0128fd19aff323/skating.jpg",
            "description": null
          },
          "author": {
            "name": "Jane Doe",
            "email": "jane@gmail.com",
            "profileImage": {
              "title": "headshot1",
              "url": "https://images.ctfassets.net/nyb9we33lqco/46CQReemigXZ8mZtwabd7w/02c729227cc0b2d58cf758c06dae9925/headshot1.jpeg",
              "description": null
            },
            "sys": { "id": "7yYdcXkfsPP5JetwYOxTDN" }
          },
          "sys": { "id": "4CqYqxqCPzNvMxpfS2E35N" }
        }
      ]
    }
  }
}
```

<br/>
<br/>
<br/>

### REST - blogCollection Response

```bash
{
  "sys": {
    "type": "Array"
  },
  "total": 4,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "sports"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "nyb9we33lqco"
          }
        },
        "id": "1mdvXZuj5eWZZHGFeUftvb",
        "type": "Entry",
        "createdAt": "2022-09-02T13:37:40.287Z",
        "updatedAt": "2022-09-06T07:33:55.917Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 9,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Why it's called Football and not Soccer.",
        "slug": "why-its-called-football-and-not-soccer",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2Pl6OSE3qjBFJRTy4sxgWA"
          }
        },
        "body": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis      incidunt magnam ad sint suscipit quo officia ex itaque magni earum      quibusdam eveniet sit, voluptatum natus rerum neque. Debitis mollitia      beatae nobis quas aut. Quibusdam ab, eaque at quas vitae sequi quisquam      possimus. Maxime facilis nam officia harum assumenda sequi eos corrupti      hic alias earum a, error veniam. Quos exercitationem hic temporibus omnis      qui maiores sequi provident, quaerat quia consectetur assumenda dolor      aliquid asperiores nam officiis iste voluptates vero doloribus. Porro eos      nesciunt neque doloribus dolorem amet, nihil quae praesentium odio minima?      Est, veniam cum! Odit suscipit accusamus perspiciatis a. Autem.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "author": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "5N5ShJ1cGVqjMh9zB0i4QD"
          }
        },
        "test": 100
      }
    },
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "art"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "nyb9we33lqco"
          }
        },
        "id": "C5jHaNi9yiciqljkiz05z",
        "type": "Entry",
        "createdAt": "2022-09-02T13:58:26.007Z",
        "updatedAt": "2022-09-03T21:20:20.286Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 3,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Painting is the art of applying paint.",
        "slug": "painting-is-the-art-of-applying-paint",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "66hxiXacRk2jUGZnoqUUGI"
          }
        },
        "body": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis      incidunt magnam ad sint suscipit quo officia ex itaque magni earum      quibusdam eveniet sit, voluptatum natus rerum neque. Debitis mollitia      beatae nobis quas aut. Quibusdam ab, eaque at quas vitae sequi quisquam      possimus. Maxime facilis nam officia harum assumenda sequi eos corrupti      hic alias earum a, error veniam. Quos exercitationem hic temporibus omnis      qui maiores sequi provident, quaerat quia consectetur assumenda dolor      aliquid asperiores nam officiis iste voluptates vero doloribus. Porro eos      nesciunt neque doloribus dolorem amet, nihil quae praesentium odio minima?      Est, veniam cum! Odit suscipit accusamus perspiciatis a. Autem.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "author": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "1chhDuocF61FGdaEG2Dl7m"
          }
        }
      }
    },
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "gaming"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "nyb9we33lqco"
          }
        },
        "id": "31P2EgoXs9R2e466Fl1Cev",
        "type": "Entry",
        "createdAt": "2022-09-02T14:12:57.888Z",
        "updatedAt": "2022-09-03T21:20:12.045Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Is Esport really a sport?",
        "slug": "is-esport-really-a-sport",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "4N5EsEkOBI1w2euL9FSu43"
          }
        },
        "body": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis      incidunt magnam ad sint suscipit quo officia ex itaque magni earum      quibusdam eveniet sit, voluptatum natus rerum neque. Debitis mollitia      beatae nobis quas aut. Quibusdam ab, eaque at quas vitae sequi quisquam      possimus. Maxime facilis nam officia harum assumenda sequi eos corrupti      hic alias earum a, error veniam. Quos exercitationem hic temporibus omnis      qui maiores sequi provident, quaerat quia consectetur assumenda dolor      aliquid asperiores nam officiis iste voluptates vero doloribus. Porro eos      nesciunt neque doloribus dolorem amet, nihil quae praesentium odio minima?      Est, veniam cum! Odit suscipit accusamus perspiciatis a. Autem.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "author": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "5N5ShJ1cGVqjMh9zB0i4QD"
          }
        }
      }
    },
    {
      "metadata": {
        "tags": [
          {
            "sys": {
              "type": "Link",
              "linkType": "Tag",
              "id": "sports"
            }
          }
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "nyb9we33lqco"
          }
        },
        "id": "4CqYqxqCPzNvMxpfS2E35N",
        "type": "Entry",
        "createdAt": "2022-09-02T14:03:09.999Z",
        "updatedAt": "2022-09-03T21:20:07.208Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 2,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "Skating like Tony Hawk.",
        "slug": "skating-like-tony-hawk",
        "thumbnail": {
          "sys": {
            "type": "Link",
            "linkType": "Asset",
            "id": "2pgx8GwCbHOGSHY8gar4nS"
          }
        },
        "body": {
          "data": {},
          "content": [
            {
              "data": {},
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis      incidunt magnam ad sint suscipit quo officia ex itaque magni earum      quibusdam eveniet sit, voluptatum natus rerum neque. Debitis mollitia      beatae nobis quas aut. Quibusdam ab, eaque at quas vitae sequi quisquam      possimus. Maxime facilis nam officia harum assumenda sequi eos corrupti      hic alias earum a, error veniam. Quos exercitationem hic temporibus omnis      qui maiores sequi provident, quaerat quia consectetur assumenda dolor      aliquid asperiores nam officiis iste voluptates vero doloribus. Porro eos      nesciunt neque doloribus dolorem amet, nihil quae praesentium odio minima?      Est, veniam cum! Odit suscipit accusamus perspiciatis a. Autem.",
                  "nodeType": "text"
                }
              ],
              "nodeType": "paragraph"
            }
          ],
          "nodeType": "document"
        },
        "author": {
          "sys": {
            "type": "Link",
            "linkType": "Entry",
            "id": "7yYdcXkfsPP5JetwYOxTDN"
          }
        }
      }
    }
  ],
  "includes": {
    "Entry": [
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "1chhDuocF61FGdaEG2Dl7m",
          "type": "Entry",
          "createdAt": "2022-09-02T13:02:07.236Z",
          "updatedAt": "2022-09-02T13:06:23.271Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 3,
          "contentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "author"
            }
          },
          "locale": "en-US"
        },
        "fields": {
          "name": "Julia Doe",
          "profileImage": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "kSL5uJtpVkx0l8M4bGyk6"
            }
          },
          "email": "julia@gmail.com"
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "5N5ShJ1cGVqjMh9zB0i4QD",
          "type": "Entry",
          "createdAt": "2022-09-02T13:00:27.809Z",
          "updatedAt": "2022-09-02T13:06:50.078Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 2,
          "contentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "author"
            }
          },
          "locale": "en-US"
        },
        "fields": {
          "name": "Sam Smith",
          "profileImage": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "2g0l3CCy9ezAIeIlUt5YNm"
            }
          },
          "email": "sam@gmail.com"
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "7yYdcXkfsPP5JetwYOxTDN",
          "type": "Entry",
          "createdAt": "2022-09-02T13:00:48.746Z",
          "updatedAt": "2022-09-02T13:05:35.520Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 2,
          "contentType": {
            "sys": {
              "type": "Link",
              "linkType": "ContentType",
              "id": "author"
            }
          },
          "locale": "en-US"
        },
        "fields": {
          "name": "Jane Doe",
          "profileImage": {
            "sys": {
              "type": "Link",
              "linkType": "Asset",
              "id": "46CQReemigXZ8mZtwabd7w"
            }
          },
          "email": "jane@gmail.com"
        }
      }
    ],
    "Asset": [
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "2Pl6OSE3qjBFJRTy4sxgWA",
          "type": "Asset",
          "createdAt": "2022-09-02T13:29:06.822Z",
          "updatedAt": "2022-09-02T13:29:06.822Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "Why it's called football and not soccer.",
          "description": "",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/2Pl6OSE3qjBFJRTy4sxgWA/1e3662e6103f464cc65f1eaafbe0fcc0/football.jpg",
            "details": {
              "size": 604407,
              "image": {
                "width": 2690,
                "height": 1793
              }
            },
            "fileName": "football.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "2g0l3CCy9ezAIeIlUt5YNm",
          "type": "Asset",
          "createdAt": "2022-09-02T12:58:55.728Z",
          "updatedAt": "2022-09-02T12:58:55.728Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "headshot4",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/2g0l3CCy9ezAIeIlUt5YNm/af38324cda4db1d2f39030e3c37b9db0/headshot4.jpeg",
            "details": {
              "size": 72342,
              "image": {
                "width": 853,
                "height": 580
              }
            },
            "fileName": "headshot4.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "2pgx8GwCbHOGSHY8gar4nS",
          "type": "Asset",
          "createdAt": "2022-09-02T13:58:10.640Z",
          "updatedAt": "2022-09-02T13:58:10.640Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "skating",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/2pgx8GwCbHOGSHY8gar4nS/dc5f1a76e0eee0238a0128fd19aff323/skating.jpg",
            "details": {
              "size": 264213,
              "image": {
                "width": 1500,
                "height": 1000
              }
            },
            "fileName": "skating.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "46CQReemigXZ8mZtwabd7w",
          "type": "Asset",
          "createdAt": "2022-09-02T12:58:55.706Z",
          "updatedAt": "2022-09-02T12:58:55.706Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "headshot1",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/46CQReemigXZ8mZtwabd7w/02c729227cc0b2d58cf758c06dae9925/headshot1.jpeg",
            "details": {
              "size": 2084474,
              "image": {
                "width": 2400,
                "height": 1600
              }
            },
            "fileName": "headshot1.jpeg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "4N5EsEkOBI1w2euL9FSu43",
          "type": "Asset",
          "createdAt": "2022-09-02T13:58:16.325Z",
          "updatedAt": "2022-09-02T13:58:16.325Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "esports",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/4N5EsEkOBI1w2euL9FSu43/dc07b1b5bdbfd3f2983223608243d76f/esports.jpg",
            "details": {
              "size": 118924,
              "image": {
                "width": 1500,
                "height": 1000
              }
            },
            "fileName": "esports.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "66hxiXacRk2jUGZnoqUUGI",
          "type": "Asset",
          "createdAt": "2022-09-02T13:58:05.460Z",
          "updatedAt": "2022-09-02T13:58:05.460Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "painting",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/66hxiXacRk2jUGZnoqUUGI/6bf7899d975d0cb0793d87021fbf66a7/painting.jpg",
            "details": {
              "size": 178633,
              "image": {
                "width": 1500,
                "height": 1000
              }
            },
            "fileName": "painting.jpg",
            "contentType": "image/jpeg"
          }
        }
      },
      {
        "metadata": {
          "tags": []
        },
        "sys": {
          "space": {
            "sys": {
              "type": "Link",
              "linkType": "Space",
              "id": "nyb9we33lqco"
            }
          },
          "id": "kSL5uJtpVkx0l8M4bGyk6",
          "type": "Asset",
          "createdAt": "2022-09-02T12:58:55.713Z",
          "updatedAt": "2022-09-02T12:58:55.713Z",
          "environment": {
            "sys": {
              "id": "master",
              "type": "Link",
              "linkType": "Environment"
            }
          },
          "revision": 1,
          "locale": "en-US"
        },
        "fields": {
          "title": "headshot2",
          "file": {
            "url": "//images.ctfassets.net/nyb9we33lqco/kSL5uJtpVkx0l8M4bGyk6/aa1999f2b001ade903a857d5b0818c12/headshot2.webp",
            "details": {
              "size": 23562,
              "image": {
                "width": 750,
                "height": 500
              }
            },
            "fileName": "headshot2.webp",
            "contentType": "image/webp"
          }
        }
      }
    ]
  }
}
```

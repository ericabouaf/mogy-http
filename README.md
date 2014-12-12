# mogy-http

HTTP Request Activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

    $ npm install mogy-http --save

To register the `http` activity to Amazon Simple Workflow :

    $ mogy register

## Config

The config for this activity is optional. It allows to override request options for all http activities.

In your mogy environment config file, under the `activities` key, add :

````json
"http": {
    /*"proxy": {
    }*/
}
````

Cf <https://github.com/request/request> to see the options.


## Sample Decider Usage

````javascript
activity({
    name: 'my-task',
    activity: 'http',
    input:  {
        method: 'POST',
        uri: 'http://requestb.in/1bhxg1v1',
        form:{
            key:'value'
        }
    }
})
````

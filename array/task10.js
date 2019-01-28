let cpus = [
    {
        cpu: 'intel',
        info: {
            cores: 2,
            cache: 3
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 4,
            cache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            cache: 1
        }
    },
    {
        cpu: 'intel',
        info: {
            cores: 3,
            cache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            cache: 2
        }
    }
]

function compare(first, second) {
    if (first.info.cores > second.info.cores) return 1;
    if (first.info.cores < second.info.cores) return -1;
}

cpus.sort(compare);
console.log(cpus);
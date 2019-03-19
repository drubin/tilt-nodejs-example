def set_namespace(namespace):
  command = 'kubectl config set-context $(kubectl config current-context) --namespace=%s' % (namespace)
  current_context = str(local(command)).rstrip('\n')

def set_context(context, namespace=''):
  command = 'kubectl config use-context %s' % (context)
  current_context = str(local(command)).rstrip('\n')
  if namespace:
    set_namespace(namespace)

set_context('docker-for-desktop', 'default')


repo = local_git_repo('.')


api = docker_build('api:reload', '.', build_args={}, dockerfile='dev.Dockerfile')
api.add(repo.path('src/'), '/app/src/')
api.hot_reload()

k8s_yaml(helm('helm/api'))